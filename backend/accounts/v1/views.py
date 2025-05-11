from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
import datetime

from accounts.models import Accounts
from .serializaers import SignUpSerializer
from .serializaers import SingInSerializer


class AuthAPIView(APIView):
    def post(self, request):
        client_data=request.data
        if client_data["type"] == "signup":
            serializer = SignUpSerializer(data=client_data)

            if not serializer.is_valid():
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            username = serializer.validated_data["username"]
            email = serializer.validated_data["email"]
            password = serializer.validated_data["password"]

            if Accounts.objects.filter(username=username).exists():
                return Response(
                    {"msg": "Username already taken."},
                    status=status.HTTP_400_BAD_REQUEST
                )

            elif Accounts.objects.filter(email=email).exists():
                return Response(
                    {"msg": "Email already taken."},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            Accounts.objects.create(
                username=username,
                email=email,
                password=password  
            )

            return Response(
                {"msg": "Account created successfully!"},
                status=status.HTTP_201_CREATED
            )
        elif client_data["type"] == "signin":
            serializer = SingInSerializer(data=client_data)

            if not serializer.is_valid():
                return Response(
                    {"msg" : "Not valide data"},
                    status=status.HTTP_400_BAD_REQUEST
                )
            username = serializer.validated_data["username"]
            password = serializer.validated_data["password"]

            if Accounts.objects.filter(username=username).exists():
                account_obj = Accounts.objects.get(username=username)
                if account_obj.password == password :
                    account_obj.last_login = datetime.datetime.now()
                    account_obj.save()
                    refresh = RefreshToken.for_user(account_obj)
                    return Response(
                        {
                            "msg" : f"Dear {username} your signin successfuly",
                            "token" : {
                                "refreshToken" : str(refresh),
                                "accessToken" : str(refresh.access_token)
                            },
                            "user" : {
                                "account_id" : account_obj.id,
                                "username" : account_obj.username,
                                "email" : account_obj.email,
                                "last_login" : account_obj.last_login
                            }
                        },
                        status=status.HTTP_202_ACCEPTED
                    )
                else:
                    return Response(
                        {"msg" : "Username or password is incorrect."},
                        status=status.HTTP_400_BAD_REQUEST
                    )
            else:
                return Response(
                    {"msg": "Username or password is incorrect."},
                    status=status.HTTP_400_BAD_REQUEST
                )



