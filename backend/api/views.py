from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

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
    return JsonResponse(routes, safe=False)
