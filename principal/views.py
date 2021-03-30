# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
import csv
from principal.models import Activities


# Create your views here.

import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def index(request):
    return render(request, 'principal/index.html')


def loadActivities(request):
    file_path = (BASE_DIR+'/sysapontamentos/file.txt');
    print("Caminho do arquivo: " + file_path)
    reader = csv.DictReader(open(file_path))
    for row in reader:
        drug = Activities(name=row[u'name'], style=row[u'Style'], assignedto=row[u'Assigned To'])
        drug.save()
    return render(request, 'principal/index.html')
