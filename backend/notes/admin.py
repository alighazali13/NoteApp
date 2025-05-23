from django.contrib import admin
from .models import Note

class Note_admin(admin.ModelAdmin):
    list_display = ['id', 'account', 'title', 'color']
admin.site.register(Note, Note_admin)
