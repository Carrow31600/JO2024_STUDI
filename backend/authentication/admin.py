from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import userProfil

class UserProfileInline(admin.StackedInline) : 
    model = userProfil

class UserAdmin (UserAdmin) : 
    inlines = (UserProfileInline,)


admin.site.unregister(User)
admin.site.register(User, UserAdmin )