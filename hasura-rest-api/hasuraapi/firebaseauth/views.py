from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from drf_firebase_auth.authentication import FirebaseAuthentication
from rest_framework.views import APIView
from .serializers import LoginSerializer, UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from firebase_admin import auth
from requests import post


class UserAPIView(APIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    permission_classes = [IsAuthenticated]

    def post(self, request, format='json'):
        # create users
        request_data = request.data['input']['credentials']
        serializer = UserSerializer(data=request_data)
        if serializer.is_valid():
            data = serializer.validated_data
            username = str(data['username'])
            email = str(data['email'])
            password = str(data['password'])
            user = User.objects.filter(username=username)
            if user.exists():
                firebase_user = auth.create_user(
                    email=email, password=password, display_name=username)
                additional_claims = {"https://hasura.io/jwt/claims": {
                    "x-hasura-allowed-roles": ["user"],
                    "x-hasura-default-role": "user",
                    "x-hasura-user-id": firebase_user.uid,
                }, }
                auth.set_custom_user_claims(
                    firebase_user.uid, additional_claims)
                returndata = {'id': firebase_user.uid, 'email': firebase_user.email,
                              'displayName': firebase_user.display_name}
                return Response(returndata, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminCreateView(APIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    permission_classes = [IsAuthenticated, IsAdminUser]

    def post(self, request, format='json'):
        # create admin users
        request_data = request.data['input']['credentials']
        serializer = UserSerializer(data=request_data)
        if serializer.is_valid():
            data = serializer.validated_data
            username = str(data['username'])
            email = str(data['email'])
            password = str(data['password'])
            user = User.objects.filter(username=username)
            if user.exists():
                firebase_user = auth.create_user(
                    email=email, password=password, display_name=username)
                additional_claims = {"https://hasura.io/jwt/claims": {
                    "x-hasura-allowed-roles": ["admin"],
                    "x-hasura-default-role": "admin",
                    "x-hasura-user-id": firebase_user.uid,
                }, }
                auth.set_custom_user_claims(
                    firebase_user.uid, additional_claims)
                returndata = {'id': firebase_user.uid, 'email': firebase_user.email,
                              'displayName': firebase_user.display_name}
                user = User(
                    username=str(firebase_user.uid), email=email, is_staff=True)
                user.set_password(password)
                user.save()
                return Response(returndata, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminDeleteView(APIView):
    def post(self, request, format=None):
        id = request.data['input']['username']
        user = User.objects.filter(username=id)
        if user.exists():
            auth.delete_user(user.username)
            user.delete()
            return Response({'ok': str('test') + ' has been deleted'}, status=status.HTTP_200_OK)
        return Response('{0} does not exists'.format(str(id)), status=status.HTTP_400_BAD_REQUEST)


class AdminLoginAPIView(APIView):
    """
    API endpoint that allows admin to login
    """

    def post(self, request, format=None):
        # login users
        request_data = request.data['input']['credentials']
        serializer = LoginSerializer(data=request_data)
        if serializer.is_valid():
            data = serializer.data
            print(data)
            apikey = '=='
            AUTH_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={}'.format(
                apikey)
            email = str(data['email'])
            password = str(data['password'])
            api_post_data = {'email': email,
                             'password': password,
                             'returnSecureToken': True}
            api_return = post(AUTH_URL, data=api_post_data)
            api_return_json = api_return.json()
            returndata = {'id': api_return_json['localId'],
                          'accessToken': api_return_json['idToken']
                          }
            return Response(returndata, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(APIView):
    """
    API endpoint that allows users to be viewed or edited.
    """

    def post(self, request, format=None):
        # login users
        request_data = request.data['input']['credentials']
        serializer = LoginSerializer(data=request_data)
        if serializer.is_valid():
            data = serializer.data
            apikey = '=='
            AUTH_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={}'.format(
                apikey)
            email = str(data['email'])
            password = str(data['password'])
            api_post_data = {'email': email,
                             'password': password,
                             'returnSecureToken': True}
            api_return = post(AUTH_URL, data=api_post_data)
            api_return_json = api_return.json()
            returndata = {'id': api_return_json['localId'],
                          'accessToken': api_return_json['idToken']
                          }
            return Response(returndata, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
