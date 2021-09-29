from django.urls import path
from . import views

urlpatterns=[
        path('',views.enrolmentformfun,name="enrolmentformfun"),
        # path('proposalform/', views.proposalformfunc, name="proposalformfunc"),
]