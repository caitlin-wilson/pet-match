from django.db import models
from django.contrib.auth.models import User


class UserPreferences(models.Model):
    user = models.OneToOneField(
        to=User, on_delete=models.CASCADE, related_name='preferences')
    type = models.CharField(max_length=7)
    gender = models.CharField(max_length=13, default='no preference')
    age = models.CharField(max_length=13, default='no preference')
    zip_code = models.CharField(max_length=5)

    def __str__(self):
        return f"{self.user}'s preferences"
