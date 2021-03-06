# Generated by Django 3.1.2 on 2020-10-28 12:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('personas', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Proveedor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('razon_social', models.CharField(max_length=300)),
                ('activo', models.BooleanField(default=True)),
                ('contacto', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='personas.persona')),
            ],
            options={
                'verbose_name': 'Proveedor',
                'verbose_name_plural': 'Proveedores',
            },
        ),
    ]
