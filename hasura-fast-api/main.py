import uvicorn
import os
from typing import Optional
from fastapi import FastAPI, Depends,  Request, Response, status
from fastapi_cloudauth.firebase import FirebaseCurrentUser, FirebaseClaims
from firebase_admin import auth, credentials
from firebase_admin.auth import EmailAlreadyExistsError, UserNotFoundError
import firebase_admin
from pydantic import BaseModel
from pydantic.networks import EmailStr
from pydantic.errors import EmailError
from requests import post
from bcrypt import hashpw


os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = '/Users/wenkai/Documents/Private/Freelance/HasuraExam/hasura-fast-api/credentials/credentials.json'
app = FastAPI()
default_app = firebase_admin.initialize_app()
get_current_user = FirebaseCurrentUser(project_id='hasura-exam')
salt = '--'.encode('utf-8')  # get from bcrypt.gensalt()


class User(BaseModel):
    email: EmailStr
    password: str
    userType: Optional[str] = None


def is_email(email):
    try:
        EmailStr.validate(str(email))
        return True
    except EmailError:
        return False


@app.post('/api/login/', status_code=status.HTTP_200_OK, tags=['login'])
async def login(response: Response, request: Request):
    """
    Create an access token with all the information:
    (Can be unauthenticated user)

    - **email**: email of firebase user
    - **password**: plain text password of firebase user
    """

    request_data = await request.json()
    print('logging in')
    user_data = request_data['input']['credentials']
    if not is_email(user_data['email']):
        status_code = status.HTTP_422_UNPROCESSABLE_ENTITY
        message = 'This is a invalid email'
        response.status_code = status_code
        return message
    user = User(email=user_data['email'], password=user_data['password'])
    apikey = '=='
    AUTH_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={}'.format(
        apikey)
    email = str(user.email)
    password = str(user.password)

    api_post_data = {'email': email,
                     'password': password,
                     'returnSecureToken': True}
    api_return = post(AUTH_URL, data=api_post_data)
    api_return_json = api_return.json()
    if not api_return_json.get('error'):
        returndata = {'id': api_return_json['localId'],
                      'accessToken': api_return_json['idToken']
                      }
        return returndata
    else:
        status_code = api_return_json.get('error')['code']
        message = api_return_json.get('error')['message']
        response.status_code = status_code
        return message


@app.post("/api/createUser/", tags=['admin'])
async def createUser(response: Response, request: Request, current_user: FirebaseClaims = Depends(get_current_user)):
    """
        Create a normal user in firebase with all the information
        UID will be auto generated
        (Needs to be authenticated and admin user)
        :

        - **email**: email of firebase user
        - **password**: plain text password of firebase user
    """
    print('create user')
    request_data = await request.json()
    user_data = request_data['input']['credentials']
    if not is_email(user_data['email']):
        status_code = status.HTTP_422_UNPROCESSABLE_ENTITY
        message = 'This is a invalid email'
        response.status_code = status_code
        return message
    user_type = 'user'
    if user_data['userType']:
        user_type = user_data['userType']
    user = User(email=user_data['email'], password=user_data['password'])
    email = str(user.email)
    password = str(user.password)

    user = auth.get_user(current_user.user_id)
    hasura_claims = user.custom_claims.get('https://hasura.io/jwt/claims')
    if hasura_claims:
        role = hasura_claims['x-hasura-default-role']
        if role == 'admin':
            try:
                firebase_user = auth.create_user(
                    email=email, password=password, display_name=email)
                additional_claims = {"https://hasura.io/jwt/claims": {
                    "x-hasura-allowed-roles": [user_type],
                    "x-hasura-default-role": user_type,
                    "x-hasura-user-id": firebase_user.uid,
                }, }
                auth.set_custom_user_claims(
                    firebase_user.uid, additional_claims)

                hashed_password = hashpw(password.encode('utf-8'), salt)
                returndata = {'id': firebase_user.uid, 'email': firebase_user.email,
                              'displayName': firebase_user.display_name,
                              'hashedPassword': hashed_password, 'userType': user_type}
                return returndata
            except EmailAlreadyExistsError:
                status_code = status.HTTP_400_BAD_REQUEST
                message = 'Email already exists'
                response.status_code = status_code
                return message
        else:
            status_code = status.HTTP_403_FORBIDDEN
            message = 'Forbidden to create user'
            response.status_code = status_code
            return message
    else:
        status_code = status.HTTP_400_BAD_REQUEST
        message = 'Please use Hasura endpoints'
        response.status_code = status_code
        return message


@app.post("/api/deleteUser/", tags=['admin'])
async def deleteUser(response: Response, request: Request, current_user: FirebaseClaims = Depends(get_current_user)):
    """
        delete an admin or normal user in firebase with all the information
        (Needs to be authenticated and admin user)
        :

        - **username**: uid of firebase user
    """
    print('delete user')
    request_data = await request.json()
    id = request_data['input']['username']
    user = auth.get_user(current_user.user_id)
    hasura_claims = user.custom_claims.get('https://hasura.io/jwt/claims')
    if hasura_claims:
        role = hasura_claims['x-hasura-default-role']
        if role == 'admin':
            try:
                auth.delete_user(id)
            except UserNotFoundError:
                status_code = status.HTTP_400_BAD_REQUEST
                message = 'user does not exists for deletion'
                response.status_code = status_code
                return message
        else:
            status_code = status.HTTP_403_FORBIDDEN
            message = 'Forbidden to delete user'
            response.status_code = status_code
            return message
    else:
        status_code = status.HTTP_400_BAD_REQUEST
        message = 'Please use Hasura endpoints'
        response.status_code = status_code
        return message

    return {'ok': str(id) + ' has been deleted'}

if __name__ == "__main__":
    uvicorn.run(app, port=8000)
