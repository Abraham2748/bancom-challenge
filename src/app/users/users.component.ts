import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('0.3s ease')),
    ]),
  ],
})
export class UsersComponent implements OnInit {
  dataSource: any;
  columnsToDisplay = ['name', 'username', 'address', 'email', 'phone'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Element | undefined;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: any) => {
      this.dataSource = users.map((user: any) => {
        return {
          id: user.id,
          name: user.name,
          username: user.username,
          address: `${user.address.street}, ${user.address.suite}, ${user.address.city}`,
          email: user.email,
          phone: user.phone,
          posts: null,
          loadedPosts: false,
        };
      });
    });
  }

  loadPosts(element: any) {
    if (!element || element.posts !== null) return;
    this.usersService.getPosts(element.id).subscribe((posts: any) => {
      setTimeout(() => {
        element.posts = posts;
        element.loadedPosts = true;
      }, 500);
    });
  }
}

export interface Element {
  id: number;
  name: string;
  username: string;
  address: string;
  email: string;
  phone: string;
  posts: Array<Object>;
  loadedPosts: boolean;
}
