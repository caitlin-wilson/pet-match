from .models import UserPreferences, UserMatches, User
from .serializers import UserPreferencesSerializer, UserMatchesSerializer, UserSerializer
from rest_framework import viewsets


class UserPreferencesViewSet(viewsets.ModelViewSet):
    queryset = UserPreferences.objects.all()
    serializer_class = UserPreferencesSerializer


class UserMatchesViewSet(viewsets.ModelViewSet):
    queryset = UserMatches.objects.all()
    serializer_class = UserMatchesSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
