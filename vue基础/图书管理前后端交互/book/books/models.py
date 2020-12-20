from django.db import models


# Create your models here.
class Book(models.Model):
    book_name = models.CharField(max_length=16, unique=True)
    update_time = models.BigIntegerField(default=0)

    class Meta:
        db_table = 'book'
