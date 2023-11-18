from django.contrib.auth.models import User
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Create initial user when the server is started'

    def handle(self, *args, **options):
        username = 'initialuser'
        email = 'initialuser@example.com'
        password = 'password'

        if not User.objects.filter(username=username).exists():
            User.objects.create_user(username=username, email=email, password=password)
            self.stdout.write(self.style.SUCCESS('Successfully created initial user'))
        else:
            self.stdout.write(self.style.SUCCESS('Initial user already exists'))