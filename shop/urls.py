from django.urls import path,include
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
# router.register('cart',MyCart,basename="MyCart")
# router.register('orders',OrderViewset,basename="OrderViewset")
router.register('category',CategoryViewset,basename="CategoryViewset")

urlpatterns = [
    path("",include(router.urls)),
    path("profile/",ProfileView.as_view(),name="profile"),
    # path("register/",RegisterView.as_view(),name="register"),
    path("product/",ProductView.as_view(),name="product"),
    path("product/<int:id>/",ProductView.as_view(),name="productdetail"),
    # path("addtocart/",AddtoCartView.as_view(),name="addtocart"),
    # path("updatecartproduct/",UpdateCartProduct.as_view(),name="updatecartproduct"),
    # path("editcartproduct/",EditCartProduct.as_view(),name="editcartproduct"),
    # path("deletecartproduct/",Deletecartproduct.as_view(),name="deletecartproduct"),
    # path("delatefullcart/",Deletefullcart.as_view(),name="deletefullcart"),
    # path("updateuser/",Updateuser.as_view(),name="updateuser"),
    # path("updateprofile/",Updateprofile.as_view(),name="updateprofile"),
]