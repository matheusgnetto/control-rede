from rest_framework import serializers
from .models import Adress

class AdressSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Adress
        fields = ['url', 'identificador', 'equipamento', 'modelo', 'IP', 'netmask', 'DHCP', 'MAC', 'info']