# Generated by Django 4.2.14 on 2024-07-19 00:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(model_name="pokemon", name="body",),
        migrations.RemoveField(model_name="pokemon", name="created",),
        migrations.RemoveField(model_name="pokemon", name="updated",),
        migrations.AddField(
            model_name="pokemon",
            name="description",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="pokemon",
            name="name",
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
