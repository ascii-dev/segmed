from django.db import models
from django.contrib.postgres.fields import JSONField


# Create your models here.
class Image(models.Model):
    id = models.CharField(max_length=120, primary_key=True)
    details = models.JSONField(null=False, blank=False)
    tagged = models.BooleanField(blank=True, default=False)

    def _str_(self):
        return self.id
