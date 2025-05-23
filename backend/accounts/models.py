from django.db import models
from django.contrib.auth.models import AbstractUser
from accounts.manager import AccountsManager
from django.core import validators
import datetime

class Accounts(AbstractUser):
    USER_ROLES = (
        ('owner', 'Owner'),
        ('admin', 'Admin'),
        ('user', 'User'),
    )
    username = models.CharField(max_length=150, unique=True, validators=[validators.MinLengthValidator(3)])
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=10, choices=USER_ROLES, default='user')
    created_at = models.DateTimeField(default=datetime.datetime.now)
    last_login = models.DateTimeField(null=True, blank=True)
    objects = AccountsManager()

    def is_owner(self):
        return self.role == 'owner'
    
    def is_admin(self):
        return self.role == 'admin'
    
    def is_user(self): 
        return self.role == 'user'
    
    def has_perm(self, perm, obj=None):
        return self.role == 'owner'

    def has_module_perms(self, app_label):
        return self.role == 'owner'

class AccountUserProfile(models.Model):
    account = models.OneToOneField(Accounts, on_delete=models.CASCADE, related_name='user_profile')
    avatar = models.CharField(max_length=40, blank=True, null=True)

    def __str__(self):
        return f"UserProfile of {self.account.username}"


class AccountAdminProfile(models.Model):
    account = models.OneToOneField(Accounts, on_delete=models.CASCADE, related_name='admin_profile')
    phone = models.CharField(max_length=40)

    def __str__(self):
        return f"AdminProfile of {self.account.username}"


