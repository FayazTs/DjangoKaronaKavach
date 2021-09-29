from django.http import HttpResponse
from django.shortcuts import render
from kavachp.models import State
app_name='kavachp'


def enrolmentformfun(request):
    qs=State.objects.all()
    return render(request, 'Enrollmentform.html',{'qs':qs})

    #return HttpResponse("starting page....")
# def proposalformfunc(request):
#     return HttpResponse("this is proposal page....")