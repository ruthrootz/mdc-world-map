from django import forms
from . models import *


class MarkerForm(forms.ModelForm):

    class Meta:
        model = Marker
        fields = '__all__'
