import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: UserModel;
  @Input() indice: number;
  constructor(private router: Router) {}

  ngOnInit() {}
  seeUser() {
    this.router.navigate(['/user', this.indice + 1]);
    // console.log(this.indice);
  }
}
