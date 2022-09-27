import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getPosts(userId: string) {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
  }

  createPost(title: string, description: string, userId: number) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body: description,
      userId,
    });
  }
}
