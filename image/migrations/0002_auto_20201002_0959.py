# Generated by Django 3.1.2 on 2020-10-02 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('image', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='details',
            field=models.JSONField(),
        ),
    ]
