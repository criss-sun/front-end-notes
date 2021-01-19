# 导入序列化器
from books.serializers import BookSerializer
from books.models import Book
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView


class BookView(GenericAPIView):
    # 指定序列化类
    serializer_class = BookSerializer
    # 指定数据来源
    queryset = Book.objects.all()

    def get(self, request, pk=None):
        if pk:
            # 获取单一模型对象
            book = self.get_object()
            # 获取类属性中定义的serializer_class
            serializer = self.get_serializer(book)
            return Response(serializer.data)
        else:
            # 获取queryset
            qs = self.get_queryset()
            serializer = self.get_serializer(qs, many=True)
            return Response(serializer.data)

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def put(self, request, pk):
        book = self.get_object()
        serializer = self.get_serializer(book, request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        try:
            book = Book.objects.get(id=pk)
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
