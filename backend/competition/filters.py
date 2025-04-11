import django_filters
from competition.models import Competition

class CompetitionFilter(django_filters.FilterSet):
    sport__name = django_filters.CharFilter(field_name='sport__name', lookup_expr='icontains')
    site__name = django_filters.CharFilter(field_name='site__name', lookup_expr='icontains')
    date = django_filters.CharFilter(field_name='date', lookup_expr='icontains')

    class Meta:
        model = Competition
        fields = ['sport__name', 'site__name', 'date']
