from rest_framework import serializers
from accounts.models import Accounts

class SignUpSerializer(serializers.Serializer):
    username = serializers.CharField(min_length=3)
    email = serializers.EmailField()
    password = serializers.CharField(min_length=8, write_only=True)
    passwordConfirm = serializers.CharField(min_length=8, write_only=True)

    def validate(self, data):
        if data['password'] != data['passwordConfirm']:
            raise serializers.ValidationError("Passwords do not match.")
        return data
    
class SingInSerializer(serializers.Serializer):
    username = serializers.CharField(min_length=3)
    password = serializers.CharField(min_length=8, write_only=True)