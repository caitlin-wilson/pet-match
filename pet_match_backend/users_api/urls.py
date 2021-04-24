from .views import UserPreferencesViewSet, UserMatchesViewSet, UserViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'user-preferences', UserPreferencesViewSet,
                basename='preferences')

router.register(r'user-matches', UserMatchesViewSet,
                basename='matches')

router.register(r'users', UserViewSet, basename='users')
urlpatterns = router.urls
