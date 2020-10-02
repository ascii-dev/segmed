from rest_framework import viewsets

from image.serializers import ImageSerializer
from image.models import Image


class ImageView(viewsets.ReadOnlyModelViewSet):
    serializer_class = ImageSerializer
    queryset = Image.objects.all()
