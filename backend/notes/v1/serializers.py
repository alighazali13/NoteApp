from rest_framework import serializers
from notes.models import Note

class NoteListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'color', 'created_at', 'edited_at']

class DetailsNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class UpdateNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['title', 'note']

class CreateNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        exclude = ['account']