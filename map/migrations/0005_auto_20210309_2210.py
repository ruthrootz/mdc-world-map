# Generated by Django 3.1.7 on 2021-03-09 22:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0004_auto_20210309_0040'),
    ]

    operations = [
        migrations.RenameField(
            model_name='marker',
            old_name='name',
            new_name='label',
        ),
    ]
