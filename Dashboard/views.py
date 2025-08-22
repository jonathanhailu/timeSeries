from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'Das1/index.html')