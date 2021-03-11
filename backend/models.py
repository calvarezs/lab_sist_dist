#from django.db import models
from djongo import models

class Temperature(models.Model): 
	#_id = models.ObjectIdField()
	city = models.CharField(max_length=255)
	temp = models.FloatField()
	timestamp = models.IntegerField()
	#created_at = models.DateTimeField(auto_now_add=True)
	#updated_at = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.name