# backend/serializers.py
from rest_framework import serializers
from backend.models import Temperature
#import django.db.models.options as options
#options.DEFAULT_NAMES = options.DEFAULT_NAMES + ('in_db',)


class TemperatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Temperature
        fields = ('city', 'temp', 'timestamp')