import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UserInfo} from "../domain/userInfo";

@Injectable()
export class UserService {

  base = environment.API_ENDPOINT;
  userInfo: UserInfo = null

  constructor(public http: HttpClient) {}

  getUserInfo() {
    return this.http.get<UserInfo>(this.base + '/user/info');
  }

}
