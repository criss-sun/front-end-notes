from rest_framework import serializers
from books.models import Book


# class BookSerializer(serializers.Serializer):
#     id = serializers.IntegerField(label='id', read_only=True)
#     book_name = serializers.CharField(label='book_name', max_length=16, required=True)
#     update_time = serializers.IntegerField(label='update_time', required=True)
#
#     def create(self, validated_data):
#         return Book.objects.create(**validated_data)
#
#     def update(self, instance, validated_data):
#         instance.book_name = validated_data.get('book_name')
#         instance.update_time = validated_data.get('update_time')
#         instance.save()
#         return instance

class BookSerializer(serializers.ModelSerializer):
    # 可以单独添加或修改原有字段,如果使用的是fields = []这种形式需要添加该字段
    # book_name = serializers.CharField(label='book_name', max_length=16, required=True)
    class Meta:
        model = Book
        # 映射哪些字段
        fields = '__all__'
        # 映射哪些字段
        # fields = []
        # 排除哪些字段
        # exclude = []
        # 修改字段校验规则
        # extra_kwargs = {
        #     'book_name': {'max_length': 16}
        # }
        # 为列表中所有字段添加相同校验规则 id默认只读可以不写
        read_only_fields = ['id']
