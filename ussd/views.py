from django.shortcuts import render, redirect
from django.http import JsonResponse
from rest_framework.decorators import api_view
from . import lottusapp
from . import lottus

lottus_app = lottusapp.get_lottus_app()

@api_view(('GET',))
def index(request):
    return render(request, 'index.html')

@api_view(('POST','GET',))
def clear_ussd(request):
    lottus_app = lottusapp.get_lottus_app()
    resp = lottus_app.process_request(request.data)
    resp = lottus.window_response(resp)
    return JsonResponse(resp, safe=False)


@api_view(('POST','GET',))
def ussd_json_api(request):

    #js = json.dumps(request.json)
    #req_dict = json.loads(js)
    #print(req_dict)

    resp = lottus_app.process_request(request.data)
    resp = lottus.window_response(resp)
    return JsonResponse(resp, safe=False)