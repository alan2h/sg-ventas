# Generated by Django 3.1.2 on 2020-11-04 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sucursales', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='sucursal',
            name='activo',
            field=models.BooleanField(default=True),
        ),
    ]