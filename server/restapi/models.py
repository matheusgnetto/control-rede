from django.db import models
from model_utils import Choices

class Adress(models.Model):
    identificador = models.CharField(max_length=200)
    equipamento = models.CharField(max_length=200)
    modelo = models.CharField(max_length=200)
    IP = models.GenericIPAddressField(max_length=16)
    netmask = models.CharField(max_length=16)
    DHCP = models.CharField(max_length=255, default="Nao") 
    MAC = models.CharField(max_length=200)
    info = models.TextField(max_length=500, null=True, blank=True)

