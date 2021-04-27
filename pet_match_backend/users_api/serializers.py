from django.contrib.auth.models import User
from django.contrib.auth import authenticate
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
                  'gender', 'size', 'distance', 'api_id', 'photo']


class UserSerializer(serializers.ModelSerializer):
    preferences = UserPreferencesSerializer(required=False)
    matches = UserMatchesSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'preferences', 'matches']


class RegisterSerializer(serializers.ModelSerializer):
    preferences = serializers.PrimaryKeyRelatedField(read_only=True)
    matches = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email',
                  'preferences', 'matches', 'password']
        extra_kwargs = {
            'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'], validated_data['email'], validated_data['password'])
        prefrences = UserPreferences.objects.create(user=user)
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError('INCORRECT CREDENTIALS')
