from django.contrib import admin
from .models import *




# class ProfileAdmin(admin.ModelAdmin):
#     list_display = ("id","prouser")
admin.site.register(Profile)

# class CategoryAdmin(admin.ModelAdmin):
    # list_display=("id",'title','date')
admin.site.register(Category)

# class ProductAdmin(admin.ModelAdmin):
#     list_display=("id","title","category","selling_price","date")
admin.site.register(Product)

# class CartAdmin(admin.ModelAdmin):
#     list_display=("id","customer","total","complit","date")
admin.site.register(Cart)

# # class CartProductAdmin(admin.ModelAdmin):
# #     list_display = ("id","cart","price","quantity","subtotal")
admin.site.register(CartProduct)

# class OrderAdmin(admin.ModelAdmin):
#     list_display = ("id","cart","date")
admin.site.register(Order)
