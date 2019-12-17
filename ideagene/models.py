from django.db import models

class Theme(models.Model):
	background_color = models.CharField(max_length=10)
	text_color = models.CharField(max_length=10)

	def __str__(self):
		return str(self.background_color)

class  Idea(models.Model):
	idea_text = models.CharField(max_length=500)

	def __str__(self):
		return str(self.idea_text)