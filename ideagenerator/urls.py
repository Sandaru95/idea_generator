from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.ToHomeView.as_view()),
    path('ideagene/', include('ideagene.urls')),
    path('search_ideas/', include('search_ideas.urls')),
    path('howto/', include('howto.urls')),
]
