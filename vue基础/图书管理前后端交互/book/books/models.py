from django.db import models


# Create your models here.
class Book(models.Model):
    book_name = models.CharField(max_length=16, unique=True, help_text='书名')
    update_time = models.BigIntegerField(default=0, help_text='更新时间')

    class Meta:
        db_table = 'book'
