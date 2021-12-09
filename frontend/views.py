import re
import os
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, logout, login
#from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.decorators import action, api_view
from api.models import OrgUnit
import qrcode
import qrcode.image.svg
from io import BytesIO



def client_app(request, appName):
    x = re.search("/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle",
                  request.META['HTTP_USER_AGENT'].lower())

    if request.user.is_authenticated:
        if request.user.is_superuser:
            orgUnits = OrgUnit.objects.filter(name=appName[1:])
            return render(request, 'frontend/'+orgUnits[0].uid+'.html')
    return redirect('/login')

def index(request):
    x = re.search("/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle",
                  request.META['HTTP_USER_AGENT'].lower())
    if x:
        if "atendimento.co.ao" in request.META['HTTP_HOST']:
            return render(request, 'frontend/mobile_angola.html')
        else:
            return render(request, 'frontend/mobile.html')
    else:
        if request.user.is_authenticated:
            if "atendimento.co.ao" in request.META['HTTP_HOST']:
                return render(request, 'frontend/dashboard_angola.html')
            else:
                if request.user.is_superuser:
                    return render(request, 'frontend/dashboard.html')
                else:
                    sqlFilter = 'SELECT * FROM api_orgunit ou, auth_user, api_orgunit_users WHERE ou.id = orgunit_id AND auth_user.id = api_orgunit_users.id AND auth_user.id = '+str(request.user.id)
                    orgUnits = OrgUnit.objects.raw(sqlFilter)
                    if(len(orgUnits) == 1):
                        return render(request, 'frontend/'+orgUnits[0].uid+'.html')

        else:
            if "demo.atendimento.co" not in request.META['HTTP_HOST']:
                if "atendimento.co.ao" in request.META['HTTP_HOST']:
                    return render(request, 'frontend/landing-angola.html')
                else:
                    return render(request, 'frontend/landing.html')
            else:
                return redirect('/login')


def landing_page(request):
    return render(request, 'frontend/landing.html')


def mobile(request):
    x = re.search("/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle",
                  request.META['HTTP_USER_AGENT'].lower())
    if x:
        if "atendimento.co.ao" in request.META['HTTP_HOST']:
            return render(request, 'frontend/mobile_angola.html')
        else:
            return render(request, 'frontend/mobile.html')
    else:
        return redirect('')


def login_view(request):
    if request.method == 'POST':
        user = authenticate(request,
                            username=request.POST["username"], password=request.POST["password"])
        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            return redirect('/login?status=invalidcredentials')
            # return render(request, 'frontend/index.html')
    else:
        return render(request, 'frontend/login.html')


def logo(request):
    image_data = open(os.path.join(
        'frontend', 'static', 'logo.png'), "rb").read()
    return HttpResponse(image_data, content_type="image/png")


def logo_dark(request):
    image_data = open(os.path.join('frontend', 'static',
                                   'logo-dark.png'), "rb").read()
    return HttpResponse(image_data, content_type="image/png")


def logout_view(request):
    logout(request)
    return redirect('/')


@api_view(('GET',))
def is_from_authenticated_user(request):
    if request.user.is_authenticated:
        return Response(True)
    else:
        return Response(False)


def chat(request):
    return render(request, 'chat.html')


def room(request, room_name):
    return render(request, 'room_copy.html', {'room_name': room_name})


def counter(request):
    return render(request, 'frontend/counter.html')



def qrcodegenerator(request):
    context = {}
    if request.method == "POST":
        factory = qrcode.image.svg.SvgPathImage
        img = qrcode.make(request.POST.get("qr_text",""), image_factory=factory, box_size=20)
        stream = BytesIO()
        img.save(stream)
        context["svg"] = stream.getvalue().decode()

    return render(request, "frontend/qrcode.html", context=context)
