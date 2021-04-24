from django.db import models
from django.contrib.auth.models import User
from django.db.models.base import Model


class UserPreferences(models.Model):
    user = models.OneToOneField(
        to=User,
        on_delete=models.CASCADE,
        related_name='preferences'
    )
    type = models.CharField(max_length=7)
    gender = models.CharField(max_length=13, default='no preference')
    age = models.CharField(max_length=13, default='no preference')
    location = models.CharField(max_length=5)

    def __str__(self):
        return f"{self.user}'s preferences"


class UserMatches(models.Model):
    user = models.OneToOneField(
        to=User,
        on_delete=models.CASCADE,
        related_name='matches'
    )
    name = models.CharField(max_length=50)
    age = models.CharField(max_length=13)
    gender = models.CharField(max_length=13)
    size = models.CharField(max_length=7)
    distance = models.CharField(max_length=7)
    api_id = models.IntegerField()

    def __str__(self):
        return f'{self.name}'
