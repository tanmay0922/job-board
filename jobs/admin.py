from django.contrib import admin
from .models import User, JobListing, Application

admin.site.register(User)
admin.site.register(JobListing)
admin.site.register(Application)
