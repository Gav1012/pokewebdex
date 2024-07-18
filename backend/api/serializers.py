from rest_framework.serializers import ModelSerializer
from .models import Pokemon

# takes django model and changes the format of information
class PokemonSerializer(ModelSerializer):
    class Meta:
        model = Pokemon
        fields = '__all__'