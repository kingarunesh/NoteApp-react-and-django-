from django.urls import path
from api.views import *


urlpatterns = [
    path("", getRoutes, name="routes"),
    path("notes/", getNotes, name="notes"),
    path("note/<str:pk>/", getNote, name="note")
]