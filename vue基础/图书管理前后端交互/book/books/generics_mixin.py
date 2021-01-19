# 导入序列化器
from books.serializers import BookSerializer
from books.models import Book
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import *


class BookView(GenericAPIView, ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin,
               DestroyModelMixin):
    # 指定序列化类
    serializer_class = BookSerializer
    # 指定数据来源
    queryset = Book.objects.all()

    def get(self, request, pk=None):
        if pk:
            return self.retrieve(request, pk)
        else:
            return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk):
        return self.update(request, pk)

    def delete(self, request, pk):
        return self.destroy(request, pk)


class BookExists(APIView):
    def get(self, request, book_name):
        try:
            book = Book.objects.get(book_name=book_name)
        except Book.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)
        serializer = BookSerializer(instance=book)
        return Response(serializer.data)
