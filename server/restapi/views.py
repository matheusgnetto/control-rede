from django.shortcuts import render
from rest_framework import viewsets
from .models import Adress
from .serializer import AdressSerializer

class AdressViewSet(viewsets.ModelViewSet):
    queryset = Adress.objects.all()
    serializer_class = AdressSerializer

