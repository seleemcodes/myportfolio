from django.shortcuts import render

def home(request):
    return render(request, 'index.html', {'base_template': 'base.html'})

def about(request):
    return render(request, 'about.html', {'base_template': 'base.html'})

def projects(request):
    return render(request, 'projects.html', {'base_template': 'base.html'})

def contact(request):
    return render(request, 'contact.html', {'base_template': 'base.html'})

from django.utils.timezone import now

def some_view(request):
    return render(request, 'index.html', {'timestamp': now().timestamp()})
