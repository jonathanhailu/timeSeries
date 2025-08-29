from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('topic-detail/<int:topic_id>/', views.topic_detail, name='topic_detail'),
]