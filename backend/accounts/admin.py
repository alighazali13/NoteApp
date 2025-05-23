from django.contrib import admin
from .models import Accounts
from .models import AccountUserProfile
from .models import AccountAdminProfile

class Accounts_admin(admin.ModelAdmin):
    list_display = ['id', 'username', 'email', 'last_login']
admin.site.register(Accounts, Accounts_admin)


class AccountAdminProfile_admin(admin.ModelAdmin):
    list_display = ['id', 'account', 'phone']
admin.site.register(AccountAdminProfile, AccountAdminProfile_admin)


class AccountUserProfile_admin(admin.ModelAdmin):
    list_display = ['id', 'account', 'avatar']
admin.site.register(AccountUserProfile, AccountUserProfile_admin)
