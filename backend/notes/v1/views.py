from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
import datetime

from notes.models import Note
from .serializers import NoteListSerializer
from .serializers import DetailsNoteSerializer
from .serializers import UpdateNoteSerializer
from .serializers import CreateNoteSerializer



class NoteListView(generics.ListAPIView):
    serializer_class = NoteListSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(account=user)
    
class DetailsNoteView(generics.RetrieveAPIView):
    serializer_class = DetailsNoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(account=user)
    
class UpdateNoteView(generics.UpdateAPIView):
    serializer_class = UpdateNoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(account=user)

class CreateNoteView(generics.CreateAPIView):
    serializer_class = CreateNoteSerializer   
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(account=self.request.user)

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(account=user)
    
class DeleteNoteView(generics.DestroyAPIView):
    serializer_class = DetailsNoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(account=user)
    




