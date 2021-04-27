from rest_framework import serializers
from .models import User, UserPreferences, UserMatches


class UserPreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPreferences
        fields = ['id', 'user', 'type', 'gender', 'age', 'location']


class UserMatchesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserMatches
        fields = ['id', 'user', 'name', 'age',
                  'gender', 'size', 'distance', 'api_id', 'photo']


class UserSerializer(serializers.ModelSerializer):
    preferences = UserPreferencesSerializer(required=False)
    matches = UserMatchesSerializer(many=True, required=False)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name',
                  'email', 'password', 'preferences', 'matches']
