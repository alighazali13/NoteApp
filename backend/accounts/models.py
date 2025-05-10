from django.db import models
import datetime

class Accounts(models.Model):
    username = models.CharField(max_length=20)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=datetime.datetime.now)
    last_login = models.DateTimeField(null=True, blank=True)
