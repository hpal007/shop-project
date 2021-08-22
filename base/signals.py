from django.db.models.signals import pre_save
from django.contrib.auth.models import User
from .models import Product
from.models import OrderItem


def updateUser(sender, instance, **kwargs):
    user = instance
    if user.email != '':
        user.username = user.email


pre_save.connect(updateUser, sender=User)


def addProductInCart(sender, instance, **kwargs):
    product = instance


pre_save.connect(addProductInCart, sender=Product)
