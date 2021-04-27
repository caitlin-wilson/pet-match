from django.db import models
from django.db.models.fields import CharField, EmailField


class User(models.Model):
    first_name = CharField(max_length=100)
    last_name = CharField(max_length=100)
    email = EmailField()
    password = CharField(max_length=100)


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
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='matches'
    )
    name = models.CharField(max_length=50)
    age = models.CharField(max_length=13)
    gender = models.CharField(max_length=13)
    size = models.CharField(max_length=7)
    distance = models.CharField(max_length=7)
    api_id = models.IntegerField()
    photo = models.CharField(max_length=1000)

    def __str__(self):
        return f'{self.name}'
