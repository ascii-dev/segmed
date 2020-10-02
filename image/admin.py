from django.contrib import admin
from image.models import Image


# Register your models here.
class ImageAdmin(admin.ModelAdmin):
    list_display = ('id', 'tagged')


admin.site.register(Image, ImageAdmin)
