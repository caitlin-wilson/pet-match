from django.db import models
from django.contrib.auth.models import User


class UserPreferences(models.Model):
    user = models.OneToOneField(
        to=User,
        on_delete=models.CASCADE,
        related_name='preferences'
    )
    type = models.CharField(max_length=7, default='Dog')
    gender = models.CharField(max_length=13, default='no preference')
    age = models.CharField(max_length=13, default='no preference')
    location = models.CharField(max_length=5, default='90210')

    def __str__(self):
        return f"{self.user}'s preferences"


class UserMatches(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='matches'
    )
    name = models.CharField(max_length=50, default='Your 1st Match')
    age = models.CharField(max_length=13, default='Ageless')
    gender = models.CharField(max_length=13, default='')
    size = models.CharField(max_length=7, default='')
    distance = models.CharField(max_length=7, default='0')
    api_id = models.IntegerField(default=0)
    photo = models.CharField(
        max_length=1000, default='https://media.istockphoto.com/vectors/paw_print-vector-id931785704?k=6&m=931785704&s=612x612&w=0&h=nRInK4vazDBj-Jt8qJs2YJop_BKE0MjIcNAx2rRgwgI='
    )

    def __str__(self):
        return f'{self.name}'
