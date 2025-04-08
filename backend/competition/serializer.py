from rest_framework import serializers

from competition.models import Competition


class CompetitionSerializer(serializers.ModelSerializer):
    sport_name = serializers.CharField(source='sport.name', read_only=True)
    site_name = serializers.CharField(source='site.name', read_only=True)

    class Meta:
        model = Competition
        fields = ['id', 'sport_name', 'site_name', 'date', 'hour']  # Remplace sport et site par sport_name et site_name