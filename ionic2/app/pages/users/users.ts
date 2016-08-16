import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {GithubUsers} from '../../providers/github-users/github-users';
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
  // Inject GithubUsers in the constructor of our page component (Dependency Injection
  // of github users)
  constructor(private navCtrl: NavController, githubUsers: GithubUsers) {
    // Test whether github provider returns data
    githubUsers
      .load()
      .then((users) => {
        // Log returned github users
        console.log(users);
      });
  }
}
