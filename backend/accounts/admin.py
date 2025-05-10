from django.contrib import admin
from .models import Accounts

class Accounts_admin(admin.ModelAdmin):
    list_display = ['id', 'username', 'email', 'last_login']
admin.site.register(Accounts, Accounts_admin)
