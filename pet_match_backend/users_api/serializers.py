from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserPreferences, UserMatches


class UserPreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPreferences
        fields = ['id', 'user', 'type', 'gender', 'age', 'location']


class UserMatchesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserMatches
        fields = ['id', 'user', 'name', 'age',
                  'gender', 'size', 'distance', 'api_id']


class UserSerializer(serializers.ModelSerializer):
    preferences = UserPreferencesSerializer(required=False)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name',
                  'email', 'password', 'preferences']
