import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {GithubUsers} from '../../providers/github-users/github-users';
import {User} from "../../models/user";
import {UserDetailsPage} from "../user-details/user-details";
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
  constructor(private navCtrl: NavController, private githubUsers: GithubUsers) {
    // Test whether github provider returns data
    githubUsers
      .load()
      .then((users) => this.users = users);
  }

  /**
   * Going to user details
   * @param event
   * @param login #username
     */
  goToDetails(event, login) {
    this.navCtrl.push(UserDetailsPage, {
      login: login
    });
  }

  // Search for user's from github
  // Handle input event from search bar
  /**
   * MAJOR CHANGE - added private key - githubUsers
   * This makes property to be available within the class and be accessible with the this
   * keyword
   * @param searchTerm
     */
  search(searchTerm) {
    let term = searchTerm.target.value;

    // We will only perform the search if we have 3 or more characters
    if (term.trim() == '' || term.trim().length < 3) {
      // Get github users and assign to local user's variable
      this.githubUsers
        .load()
        // Load original users in this case
        .then(users => this.users = users)
    } else {
      // Get the searched users from github
      this.githubUsers.searchUsers(term)
        .then(users => this.users = users)
    }
  }
}
