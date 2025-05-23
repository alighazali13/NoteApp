from django.db import models
import datetime
import uuid
from accounts.models import Accounts

class Note(models.Model):
    slug = models.SlugField(default=uuid.uuid4)
    account = models.ForeignKey(Accounts, on_delete=models.CASCADE)
    title = models.TextField()
    note = models.TextField()
    color = models.CharField(max_length=20)
    created_at = models.DateTimeField(default=datetime.datetime.now)
    edited_at = models.DateTimeField(null=True, blank=True)

