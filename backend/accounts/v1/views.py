from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializaers import AuthSerializer
from accounts.models import Accounts


class AuthAPIView(APIView):
    def post(self, request):
        serializer = AuthSerializer(data=request.data)
        msg = ''
        status_code = status.HTTP_400_BAD_REQUEST

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        username = serializer.validated_data['username']
        email = serializer.validated_data['email']
        password = serializer.validated_data['password']

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

