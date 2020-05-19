import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { take } from 'rxjs/operators';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-display-user-list',
  templateUrl: './display-user-list.component.html',
  styleUrls: ['./display-user-list.component.scss']
})
export class DisplayUserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.get().pipe(take(1)).subscribe(users => this.users = users);
  }

}
