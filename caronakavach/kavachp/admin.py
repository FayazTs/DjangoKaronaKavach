from django.contrib import admin
from .models import  State

# Register your models here.

admin.site.site_header='Admin Tutorial Dashbooard'
admin.site.register(State)