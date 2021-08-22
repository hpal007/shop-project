from django.urls import path
from base.views import product_views as views


urlpatterns = [
    path('', views.getProducts, name="Get Products"),


    path('create/', views.createProduct, name="product-create"),
    path('<str:pk>', views.getProduct, name="Get Product"),
    path('upload/', views.uploadImage, name="image-upload"),
    path('update/<str:pk>/', views.updateProduct, name="product-update"),
    path('delete/<str:pk>/', views.deleteProduct, name="product-delete"),

]
