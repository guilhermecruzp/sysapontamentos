from django import template

atividades = [
    {'name': 'Adele'},
    {'name': 'Agnes'},
    {'name': 'Billy'},
    {'name': 'Bob'},
    {'name': 'Calvin'},
    {'name': 'Christina'},
    {'name': 'Cindy'},
]

ocultos = [
    {'name': 'Guilherme'},
    {'name': 'Dayane'},
    {'name': 'Celia'},
    {'name': 'Joao'},
]


register = template.Library()

@register.simple_tag
def getAtividades():
    return atividades


@register.simple_tag
def getOcultos():
    return ocultos