from django.shortcuts import render

# backend/views.py
from .models import Temperature
from .serializers import TemperatureSerializer
from rest_framework import generics, status

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework.decorators import api_view

'''
class TemperatureList(generics.ListCreateAPIView):
	temp = Temperature(city='Stgo', temp=31.15, timestamp=18000000)
	temp.save(using='kafka')
	queryset = temp
	serializer_class = TemperatureSerializer
'''
'''
class TemperatureList(generics.ListCreateAPIView):
    queryset = Temperature.objects.all().using('kafka')
    serializer_class = TemperatureSerializer

class TemperatureDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Temperature.objects.all().using('kafka')
    serializer_class = TemperatureSerializer
'''

@api_view(['GET'])
def temperature_list(request):
    # GET list of tutorials, POST a new tutorial, DELETE all tutorials
    if request.method == 'GET':
        temperature = Temperature.objects.all()
                
        temperature_serializer = TemperatureSerializer(temperature, many=True)
        return JsonResponse(temperature_serializer.data, safe=False)
        # 'safe=False' for objects serialization
