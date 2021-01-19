# 导入序列化器
from books.serializers import BookSerializer
from books.models import Book
from rest_framework.views import APIView
from rest_framework.generics import *
from rest_framework.mixins import *


class BookView(ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView):
    # 指定序列化类
    serializer_class = BookSerializer
    # 指定数据来源
    queryset = Book.objects.all()


class BookExists(APIView):
    def get(self, request, book_name):
        try:
            book = Book.objects.get(book_name=book_name)
        except Book.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)
        serializer = BookSerializer(instance=book)
        return Response(serializer.data)
