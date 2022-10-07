import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "../../../services/authentication.service";
import {environment} from "../../../../../environments/environment";
import {UserService} from "../../../services/user.service";
import {UserInfo} from "../../../domain/userInfo";

@Component({
  selector: 'app-top-menu-landing',
  templateUrl: 'top-menu-landing.component.html',
  styleUrls: ['../top-menu.component.css'],
})

export class TopMenuLandingComponent implements OnInit {

  showLogin = true;
  subscriptions = [];
  userInfo: UserInfo = null;
  projectName = environment.projectName;

  constructor(private authentication: AuthenticationService, private userService: UserService) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.userService.getUserInfo().subscribe(
        res => {
          this.userInfo = res;
          this.userService.roleToSessionStorage(res);
          // console.log(this.userInfo);
        }, error => {
          console.log(error);
        }
      )
    );
  }

  parseUsername() {
    let firstLetters = "";
    let matches = this.userInfo.fullname.match(/\b(\w)/g);
    if(matches)
      firstLetters += matches.join('');
    return firstLetters;
  }

  logInButton() {
    this.authentication.login();
  }

  logout() {
    this.authentication.logout();
  }
}
