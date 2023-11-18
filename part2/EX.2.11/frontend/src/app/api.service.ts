import { Injectable } from '@angular/core';

export type User = {
  email: string;
  is_staff: boolean;
  url: string;
  username: string;
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost/api';

  constructor() {}

  async getUsers(): Promise<User[]> {
    console.log('fetch users');
    const data = await fetch(`${this.apiUrl}/users/`);

    return (await data.json()) ?? [];
  }
}
