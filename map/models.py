from django.db import models


class Marker(models.Model):
    label = models.CharField(max_length=255)
    longitude = models.DecimalField(decimal_places=6, max_digits=25, default=0)
    latitude = models.DecimalField(decimal_places=6, max_digits=25, default=0)
