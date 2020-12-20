from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.http import JsonResponse
import json
from django.http import QueryDict
# Create your views here.
def upload(request):
  file = request.FILES.get('img')
  if file:
    with open('static/img/' + file.name, 'wb') as fp:
      for chunk in file.chunks():
        fp.write(chunk)
        return JsonResponse({'msg': '上传成功', 'path': 'static/img/' + file.name}, json_dumps_params={'ensure_ascii': False})
  return JsonResponse({'msg': '上传失败'}, json_dumps_params={'ensure_ascii': False})

def jsonp(request):
  callback = request.GET.get('callback')
  return HttpResponse(callback + '({name:"徐毅叶"})')

def ajax(request):
  id = request.GET.get('id')
  return JsonResponse({'id': id}, json_dumps_params={'ensure_ascii': False})

def ajax_post(request):
  # application/json格式
  # id = json.loads(request.body.decode('utf8'))['id']
  print(QueryDict(request.body))
  return JsonResponse({'id': 1}, json_dumps_params={'ensure_ascii': False})
  # application/x-www-form-urlencoded格式
  # id = request.POST.get('id')
  # return JsonResponse({'id': id}, json_dumps_params={'ensure_ascii': False})

def books(request):
  print(request.method)
  id = request.POST.get('id')
  return HttpResponse(2)