import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService, User } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
  error = false;
  users: User[] = [];

  constructor(private apiService: ApiService) {}

  checkBackend() {
    this.apiService
      .getUsers()
      .then((users: User[]) => {
        this.users = users;
      })
      .catch((e) => {
        this.error == true;
      });
  }
}
