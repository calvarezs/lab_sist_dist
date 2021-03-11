# backend/urls.py
#from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from backend import views

from django.conf.urls import url

urlpatterns = [
    url(r'^backend$', views.temperature_list),

    #path('backend', views.TemperatureList.as_view(), name = 'TemperatureList'),
    #path('backend/<int:pk>/', views.TemperatureDetail.as_view(), name = 'TemperatureDetail'),
]