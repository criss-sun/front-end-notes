import json

from django.forms import model_to_dict
from django.views import View
from django.http import JsonResponse
# 导入序列化器
import books
from books.serializers import BookSerializer
from books.models import Book
from common.timestamp import get_unix_timestamp


class BookView(View):
    def get(self, request, uid=None):
        if uid:
            try:
                book = Book.objects.get(id=uid)
            except:
                return JsonResponse({}, json_dumps_params={'ensure_ascii': False}, status=204)
            data = BookSerializer(instance=book).data
            return JsonResponse(data, json_dumps_params={'ensure_ascii': False})
        else:
            book_list = Book.objects.all()
            # instance参数是做序列化, data参数是做反序列化
            # 如果序列化的是查询集需要指定many=true, 字典则不需要
            # .data可以获取序列化后的结果
            books = BookSerializer(instance=book_list, many=True).data
            # books在打印时和使用JsonResponse返回的结果不一样, 不用担心格式问题
            return JsonResponse(books, safe=False, json_dumps_params={'ensure_ascii': False})

    def post(self, request):
        data = json.loads(request.body.decode('utf8'))
        # data参数用于反序列化
        serializer = BookSerializer(data=data)
        # 判断校验是否合法, 返回布尔值
        if serializer.is_valid():
            # validated_data获取反序列化后的数据
            serializer.save()
            return JsonResponse({'msg': '添加成功', 'data': serializer.validated_data},
                                json_dumps_params={'ensure_ascii': False})
        else:
            # .errors返回校验失败原因
            return JsonResponse(serializer.errors, json_dumps_params={'ensure_ascii': False})

    def put(self, request, uid):
        if uid:
            try:
                book = Book.objects.get(id=uid)
            except books.models.Book.DoesNotExist:
                return JsonResponse({}, json_dumps_params={'ensure_ascii': False}, status=204)
            data = json.loads(request.body.decode('utf8'))
            serializer = BookSerializer(instance=book, data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse({'msg': '添加成功', 'data': serializer.validated_data},
                                    json_dumps_params={'ensure_ascii': False})
            else:
                return JsonResponse(serializer.errors, json_dumps_params={'ensure_ascii': False})

    def delete(self, request, uid):
        try:
            book = Book.objects.get(id=uid)
        except books.models.Book.DoesNotExist:
            return JsonResponse({}, json_dumps_params={'ensure_ascii': False}, status=204)
        book.delete()
        return JsonResponse({'msg': '删除成功'}, json_dumps_params={'ensure_ascii': False})


def book_exists(request, book=None):
    if request.method != 'GET':
        return JsonResponse({'error': '请求方式不被允许'}, json_dumps_params={'ensure_ascii': False}, status=405)
    elif book:
        try:
            book = Book.objects.get(book_name=book)
        except books.models.Book.DoesNotExist:
            return JsonResponse({}, json_dumps_params={'ensure_ascii': False}, status=204)

        data = BookSerializer(instance=book).data
        return JsonResponse(data, json_dumps_params={'ensure_ascii': False})
    else:
        return JsonResponse({'msg': '请传递参数'}, json_dumps_params={'ensure_ascii': False})
