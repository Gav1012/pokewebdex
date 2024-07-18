from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Pokemon
from .serializers import PokemonSerializer

# 
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/Pokemon/',
            'method': 'GET',
            'body': None,
            'description': 'Returns all Pokemon'
        },
        {
            'Endpoint': '/Pokemon/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single Pokemon'
        }
    ]
    return Response(routes)

@api_view(['GET'])
def getPokemon(request):
    pokemon = Pokemon.objects.all()
    serializer = PokemonSerializer(pokemon, many=True)
    return Response(serializer.data)