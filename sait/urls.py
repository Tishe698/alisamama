from django.urls import path

from sait.views import *

urlpatterns = [
    path('', index, name='home'),
    path('about_me', about_me, name='about_me'),
    path('traning', traning, name='traning'),
    path('master_class', master_class, name='master_class'),
    path('feedback/', feedback_view, name='feedback'),
    path('free_prognoz/', free_prognoz, name='free_prognoz'),
    path('express_konsultacia/', express_konsultacia, name='express_konsultacia'),
]
