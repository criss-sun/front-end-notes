from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
urlpatterns = [
    path('admin/', admin.site.urls),
    path('docs/', include_docs_urls(title='黑叶猴')),
    path('api/', include('books.urls')),
]
