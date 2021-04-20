from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserPreferences
from django.contrib.auth.models import User


class UserPreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPreferences
        fields = ['id', 'user', 'type', 'gender', 'age', 'zip_code']


class UserSerializer(serializers.ModelSerializer):
    preferences = UserPreferencesSerializer(required=False)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name',
                  'email', 'password', 'preferences']
