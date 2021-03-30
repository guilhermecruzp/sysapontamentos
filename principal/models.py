# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Activities(models.Model):
    name = models.TextField(max_length=50)
    style = models.BooleanField(null=False, blank=False)
    assignedto = models.TextField(max_length=50, null="", blank="")
    #goes_by = models.CharField(max_length=50, null=True, blank=True)
