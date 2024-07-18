from django.urls import path
from . import views

# holds are the url routes
urlpatterns = [
    path('', views.getRoutes, name="routes"),
]