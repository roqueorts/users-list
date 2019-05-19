import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: UserModel[] = [];
  loading: boolean;
  error: boolean;
  length: number;
  pageSize: number;
  page: number;

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private usersService: UsersService, private router: Router) {
    this.loading = true;
    this.error = false;
  }

  ngOnInit() {
    this.getPage(1);
  }

  private getPage(page: number) {
    this.usersService.getUsers(page).subscribe(
      (result: any) => {
        this.users = result.data;
        this.length = result.total;
        this.pageSize = result.per_page;
        this.page = result.page;
      },
      error => {
        console.log(error);
      }
    );
  }

  public change(event) {
    this.pageEvent = event;
    this.getPage(this.pageEvent.pageIndex + 1);
  }
}
