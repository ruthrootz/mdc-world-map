from django.views.generic.base import TemplateView


class MarkersMapView(TemplateView):
    """ map view """
    template_name = "map.html"
