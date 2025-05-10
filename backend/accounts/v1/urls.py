from django.urls import path
from . import views

urlpatterns = [
    path('auth/', views.AuthAPIView.as_view() )
]