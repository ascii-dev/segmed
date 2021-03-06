# Generated by Django 3.1.2 on 2020-10-02 09:20

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('details', django.contrib.postgres.fields.jsonb.JSONField()),
                ('tagged', models.BooleanField(blank=True, default=False)),
            ],
        ),
    ]
