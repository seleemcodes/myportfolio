from django.db import models

# Create your models here.

class Project(models.Model):  
    title = models.CharField(max_length=200)  
    description = models.TextField()  
    github_link = models.URLField(blank=True, null=True)  
    created_at = models.DateTimeField(auto_now_add=True)  

    def __str__(self):  
        return self.title  
