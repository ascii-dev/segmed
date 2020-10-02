from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from image.serializers import ImageSerializer
from image.models import Image


class ImageView(viewsets.ReadOnlyModelViewSet):
    serializer_class = ImageSerializer
    queryset = Image.objects.all()

    @action(detail=True, methods=['patch'], name='Tag image')
    def tag_image(self, request, pk=None):
        """Tag an image"""
        image = self.get_object()
        image.tagged = True
        image.save()
        return Response({'status': 'Image tagged'})
