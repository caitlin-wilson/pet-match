from .views import UserPreferencesViewSet, UserMatchesViewSet, UserViewSet, RegisterAPI, LoginAPI, UserAPI
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from knox import views as knox_views


router = DefaultRouter()
router.register(r'user-preferences', UserPreferencesViewSet,
                basename='preferences')

router.register(r'user-matches', UserMatchesViewSet,
                basename='matches')

router.register(r'users', UserViewSet, basename='users')
urlpatterns = router.urls
urlpatterns += [
    path('user/auth', include('knox.urls')),
    path('user/auth/register', RegisterAPI.as_view()),
    path('user/auth/login', LoginAPI.as_view()),
    path('user/auth/user', UserAPI.as_view()),
    path('user/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')
]
