# Generated by Django 4.2.11 on 2024-05-31 16:56

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("matching", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="senior_profile",
            name="double_major",
            field=models.CharField(blank=True, max_length=20),
        ),
    ]
