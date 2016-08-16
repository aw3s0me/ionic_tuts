import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {GithubUsers} from '../../providers/github-users/github-users';
import {User} from "../../models/user";
/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users/users.html',
  // Add GithubUsers provider as part of page component
  providers: [GithubUsers]
})
export class UsersPage {
  // Declare users as an array of User model
  users: User[];

  // Inject GithubUsers in the constructor of our page component (Dependency Injection
  // of github users)
  constructor(private navCtrl: NavController, githubUsers: GithubUsers) {
    // Test whether github provider returns data
    githubUsers
      .load()
      .then((users) => this.users = users);
  }
}
