import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: UserModel[] = [];
  loading: boolean;
  error: boolean;

  constructor(private usersService: UsersService, private router: Router) {
    this.loading = true;
    this.error = false;
  }

  ngOnInit() {
    this.usersService.getUsers('1').subscribe(
      (result: any) => {
        this.users = result.data;
        console.log(this.users);
      },
      error => {
        console.log(error);
      }
    );
  }
  verProduct(idx: number) {
    this.router.navigate(['/user', idx]);
  }
}
