from django.views.generic.base import TemplateView


class MapView(TemplateView):
    template_name = 'map/map.html'


class MarkerView(TemplateView):
    template_name = 'map/marker.html'
