from django.views.generic.base import TemplateView
from django.http import JsonResponse
from . models import Marker


def locations(request):
    markers = Marker.objects.all().values('name', 'location')
    return JsonResponse(list(markers), safe=False)


class MapView(TemplateView):
    template_name = 'map/map.html'


class MarkerView(TemplateView):
    template_name = 'map/marker.html'
