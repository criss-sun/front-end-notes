from rest_framework import serializers
from books.models import Book


class BookSerializer(serializers.Serializer):
    id = serializers.IntegerField(label='id', read_only=True)
    book_name = serializers.CharField(label='book_name', max_length=16, required=True)
    update_time = serializers.IntegerField(label='update_time', required=True)

    def create(self, validated_data):
        return Book.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.book_name = validated_data.get('book_name')
        instance.update_time = validated_data.get('update_time')
        instance.save()
        return instance
