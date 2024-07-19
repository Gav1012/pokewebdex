from django.urls import path
from . import views

# holds are the url routes for after / in urls.py backend folder
urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('pokemon/', views.getPokemon, name="Pokemon"),
    path('pokemon/<str:pk>/', views.getSingPokemon, name="SingPokemon")
]