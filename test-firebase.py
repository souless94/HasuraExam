from requests import post
import bcrypt

apikey = '=='
AUTH_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={}'.format(
    apikey)
api_post_data = {'email': email,
                 'password': password,
                 'returnSecureToken': True}
api_return = post(AUTH_URL, data=api_post_data)
api_return_json = api_return.json()
returndata = {'id': api_return_json['localId'],
              'accessToken': api_return_json['idToken']
              }
print(returndata['accessToken'])

print(bcrypt.gensalt())
