from django.db import models
from rest_framework import serializers


class Message(models.Model):
    subject = models.CharField(max_length=200)
    body = models.TextField()


class Account(models.Model):
    name = models.CharField(max_length=200)
    bank = models.CharField(
        max_length=64,
    )
    branch = models.CharField(
        max_length=64,
    )


class MessageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Message
        fields = ('url', 'subject', 'body', 'pk')


class AccountSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Account
        fields = ('url', 'name', 'branch', 'pk')
