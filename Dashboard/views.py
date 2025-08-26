from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'Das1/index.html')

def topic_detail(request, topic_id):
    return render(request, 'Dashboard/topic_detail.html', {'topic_id': topic_id})