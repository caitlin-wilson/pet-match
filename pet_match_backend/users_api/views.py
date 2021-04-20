from .models import UserPreferences
from django.contrib.auth.models import User
from .serializers import UserPreferencesSerializer, UserSerializer
from rest_framework import viewsets


class UserPreferencesViewSet(viewsets.ModelViewSet):
    queryset = UserPreferences.objects.all()
    serializer_class = UserPreferencesSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
