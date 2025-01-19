from django.db import models

# Create your models here.

class Pokemon(models.Model):
    name = models.CharField(null=True, blank=True, max_length=50)
    pokedex_number = models.IntegerField(unique=True, null=True, blank=True)
    type = models.CharField(max_length=50, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="images/")

    def __str__(self):
        return self.name