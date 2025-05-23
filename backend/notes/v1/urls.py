from django.urls import path
from . import views

urlpatterns = [
    path('getNoteList/', views.NoteListView.as_view()),
    path('getNote/<int:pk>', views.DetailsNoteView.as_view()),
    path('updateNote/<int:pk>', views.UpdateNoteView.as_view()),
    path('createNote', views.CreateNoteView.as_view()),
    path('deleteNote/<int:pk>', views.DeleteNoteView.as_view()),
]