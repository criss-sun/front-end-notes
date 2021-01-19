# 导入序列化器
from books.serializers import BookSerializer
from books.models import Book
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView


class BookView(APIView):
    def get(self, request, uid=None):
        if uid:
            try:
                book = Book.objects.get(id=uid)
            except Book.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
            serializer = BookSerializer(instance=book)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        else:
            book_list = Book.objects.all()
            # instance参数是做序列化, data参数是做反序列化
            # 如果序列化的是查询集需要指定many=true, 字典则不需要
            # .data可以获取序列化后的结果
            serializer = BookSerializer(instance=book_list, many=True)
            # books在打印时和使用JsonResponse返回的结果不一样, 不用担心格式问题
            # return JsonResponse(books, safe=False, json_dumps_params={'ensure_ascii': False})
            return Response(serializer.data)

    def post(self, request):
        # data = json.loads(request.body.decode('utf8'))
        data = request.data
        # data参数用于反序列化
        serializer = BookSerializer(data=data)
        # 判断校验是否合法, 返回布尔值
        serializer.is_valid(raise_exception=True)
        # validated_data获取反序列化后的数据
        serializer.save()
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        # serializer.errors.errors返回校验失败原因

    def put(self, request, uid):
        if uid:
            try:
                book = Book.objects.get(id=uid)
            except Book.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
            serializer = BookSerializer(instance=book, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, uid):
        try:
            book = Book.objects.get(id=uid)
        except Book.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class BookExists(APIView):
    def get(self, request, book_name):
        try:
            book = Book.objects.get(book_name=book_name)
        except Book.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)
        serializer = BookSerializer(instance=book)
        return Response(serializer.data)
