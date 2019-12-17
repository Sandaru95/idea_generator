from django.shortcuts import render, redirect
from django.views import generic

class ToHomeView(generic.View):
    def get(self, request):
        return redirect('ideagene:index')