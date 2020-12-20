from django.urls import path

from books import views

urlpatterns = [
    # get查询全部图书, post添加图书
    path('books/', views.BookView.as_view()),
    # get查询图书信息, put提交图书信息, delete删除图书
    path('books/<int:uid>/', views.BookView.as_view()),
    # get图书是否存在
    path('books/book/', views.book_exists),
    path('books/book/<str:book>/', views.book_exists),
]
