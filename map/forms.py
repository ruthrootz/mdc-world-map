from django import forms
from . models import *


class MarkerForm(forms.ModelForm):

    class Meta:
        model = Marker
        fields = ['label', 'latitude', 'longitude']
        widgets = {
            'latitude': forms.TextInput(attrs={'disabled': True}),
            'longitude': forms.TextInput(attrs={'disabled': True}),
        }
