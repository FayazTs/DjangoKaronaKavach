from django.db import models

# Create your models here.

class State(models.Model):
    statesname=models.CharField(max_length=100)
    # district=models.CharField(max_length=100)

    def __str__(self):
        return str(self.statesname)


