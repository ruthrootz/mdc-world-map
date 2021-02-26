from django.conf.urls import url
from django.urls import path
from . views import *


app_name = 'map'
urlpatterns = [
    path('', map_view, name='mapview'),
    path('marker', marker_view, name='markerview'),
    url('locations', locations, name='locations'),
]
