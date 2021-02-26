from django.conf.urls import url
from django.urls import path
from . views import *


app_name = 'map'
urlpatterns = [
    path('', MapView.as_view()),
    path('marker', MarkerView.as_view()),
    url('locations', locations, name='locations'),
]
