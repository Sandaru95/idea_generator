from django.shortcuts import render
from django.views import generic

from ideagene.models import Idea

class IndexView(generic.TemplateView):
	template_name = 'search_ideas/index.html'

	def get_context_data(self, **kwargs):
		context = super(IndexView, self).get_context_data(**kwargs)
		context['idea_list'] = Idea.objects.all()
		return context