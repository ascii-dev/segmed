import requests

from django.conf import settings
from django.core.management.base import BaseCommand

from image.models import Image


class Command(BaseCommand):
    def handle(self, *args, **options):
        # Get first page of images from unsplash API
        response = requests.get(
            'https://api.unsplash.com/photos',
            headers={
                'Accept-Version': 'v1',
                'Authorization': f'Client-ID {settings.UNSPLASH_ACCESS_KEY}'
            }
        )

        # Loop through each image while adding it to the database
        for data in response.json():
            try:
                Image.objects.get(pk=data['id'])
            except Image.DoesNotExist:
                Image.objects.create(
                    id=data['id'],
                    details=data,
                )
