from django.urls import path


from . import views
urlpatterns = [
    path('user/login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    # path('', views.getRoutes, name="Get routes"),
    path('user/profile/', views.getUserProfile, name="user-profile"),
    path('users/', views.getUsers, name="users"),
    path('user/register/', views.registerUser, name="user-register"),
    path('products/', views.getProducts, name="Get Products"),
    path('products/<str:pk>', views.getProduct, name="Get Product"),

]
