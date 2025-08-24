from django.urls import path
from django.shortcuts import render

urlpatterns = [
    path('', lambda request: render(request, 'index.html'), name='index'),
    path('about/', lambda request: render(request, 'about.html'), name='about'),
    path('contact/', lambda request: render(request, 'contact.html'), name='contact'),
    path('base/', lambda request: render(request, 'base.html'), name='base'),
]

