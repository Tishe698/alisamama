from django.db import models

class MenuItem(models.Model):
    image = models.ImageField(upload_to='menu_images/')
    text = models.TextField(max_length=67,)

    def __str__(self):
        return self.text

class MenuItem2(models.Model):
    image = models.ImageField(upload_to='menu_images/')
    text = models.TextField(max_length=68,)

    def __str__(self):
        return self.text

class MenuItem3(models.Model):
    text = models.TextField(max_length=68,)
    text2 = models.TextField(max_length=73,)

    def __str__(self):
        return self.text
