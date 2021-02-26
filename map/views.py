from django.shortcuts import render
from django.http import JsonResponse
from . models import Marker


def locations(request):
    markers = Marker.objects.all().values('name', 'longitude', 'latitude')
    return JsonResponse(list(markers), safe=False)


def map_view(request):
    return render(request, 'map/map.html')


def marker_view(request):
    return render(request, 'map/marker.html')
