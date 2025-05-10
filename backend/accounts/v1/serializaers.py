from rest_framework import serializers
from accounts.models import Accounts

class AuthSerializer(serializers.Serializer):
    username = serializers.CharField(min_length=3)
    email = serializers.EmailField()
    password = serializers.CharField(min_length=8)
    passwordConfirm = serializers.CharField(min_length=8)

    def validate(self, data):
        if data['password'] != data['passwordConfirm']:
            raise serializers.ValidationError("Passwords do not match.")
        return data