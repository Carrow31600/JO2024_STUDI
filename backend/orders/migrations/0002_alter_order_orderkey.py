# Generated by Django 5.2 on 2025-04-15 09:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='orderkey',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
