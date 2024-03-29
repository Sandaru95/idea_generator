from django.shortcuts import render
from django.views import generic

from .models import Idea, Theme

class IndexView(generic.TemplateView):
	template_name = 'ideagene/index.html'

	def get_context_data(self, **kwargs):
		context = super(IndexView, self).get_context_data(**kwargs)
		context['idea_list'] = Idea.objects.all()
		context['theme_list'] = Theme.objects.all()
		return context