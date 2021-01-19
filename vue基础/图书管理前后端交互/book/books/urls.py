from django.urls import path
from rest_framework import routers

from books import api_views

# urlpatterns = [
#     # get查询全部图书, post添加图书
#     path('books/', views.BookView.as_view()),
#     # get查询图书信息, put提交图书信息, delete删除图书
#     path('books/<int:uid>/', views.BookView.as_view()),
#     # get图书是否存在
#     path('books/book/<str:book_name>/', views.BookExists.as_view())
# ]

# from books import generics_views
#
# urlpatterns = [
#     # get查询全部图书, post添加图书
#     path('books/', generics_views.BookView.as_view()),
#     # get查询图书信息, put提交图书信息, delete删除图书
#     path('books/<int:pk>/', generics_views.BookView.as_view()),
#     # get图书是否存在
#     path('books/book/<str:book_name>/', generics_views.BookExists.as_view())
# ]

# from books import generics_mixin
#
# urlpatterns = [
#     # get查询全部图书, post添加图书
#     path('books/', generics_mixin.BookView.as_view()),
#     # get查询图书信息, put提交图书信息, delete删除图书
#     path('books/<int:pk>/', generics_mixin.BookView.as_view()),
#     # get图书是否存在
#     path('books/book/<str:book_name>/', generics_mixin.BookExists.as_view())
# ]

# from books import list_apiview
#
# urlpatterns = [
#     # get查询全部图书, post添加图书
#     path('books/', list_apiview.BookView.as_view()),
#     # get查询图书信息, put提交图书信息, delete删除图书
#     path('books/<int:pk>/', list_apiview.BookView.as_view()),
#     # get图书是否存在
#     path('books/book/<str:book_name>/', list_apiview.BookExists.as_view())
# ]

from books import view_set

urlpatterns = [
    # get查询全部图书, post添加图书
    path('books/', view_set.BookView.as_view({'get': 'list', 'post': 'create'})),
    # get查询图书信息, put提交图书信息, delete删除图书
    path('books/<int:pk>/', view_set.BookView.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    # get图书是否存在
    path('books/book/<str:book_name>/', view_set.BookView.as_view({'get': 'book'}))
]
# router = routers.DefaultRouter()
# router.register(r'books/', view_set.BookView)
# urlpatterns += router.urls
