import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: any = {};
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) {
    this.activatedRoute.params.subscribe(params => {
      this.usersService.getUser(params.id).subscribe(
        (result: any) => {
          this.user = result.data;
          console.log(this.user);
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  ngOnInit() {}
}
