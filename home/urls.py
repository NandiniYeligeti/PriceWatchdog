from django.contrib import admin
from django.urls import path
from . import views
from django.contrib import admin
from .views import scrape_amazon
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.index, name='index'),

    path('',views.SignupPage,name='signup'),
    path('login/',views.LoginPage,name='login'),
    path('home/',views.HomePage,name='home'),
    path('logout/',views.LogoutPage,name='logout'),




    path('store/', views.store, name='store'),

    path('search/', views.search, name='search'),

    path('main/', views.main, name='main'),

    path("compare1/", views.compare1, name='compare1'),

    path('compare2/', views.compare2, name='compare2'),

    path("compare2/<int:id1>", views.compare2, name='compare2'),

    path("compare2/<int:id1>/<int:id2>", views.compare2, name='compare2'),

    path('get_product_details/', views.get_product_details, name='get_product_details'),

    path('view/', views.view, name='view'),

    path('amazontutorial/' , scrape_amazon, name= 'scrape_amazon'),

]