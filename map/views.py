from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.conf import settings
from . models import Marker
from . forms import MarkerForm


def locations(request):
    markers = Marker.objects.all().values('label', 'latitude', 'longitude')
    return JsonResponse(list(markers), safe=False)


def map_view(request):
    context = {
        'api_key': settings.GOOGLE_MAPS_API_KEY
    }
    return render(request, 'map/map.html', context)


def marker_view(request):
    form = MarkerForm()
    if request.method == 'POST':
        form = MarkerForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('/')
    context = {
        'form': form,
    }
    return render(request, 'map/marker.html', context)
