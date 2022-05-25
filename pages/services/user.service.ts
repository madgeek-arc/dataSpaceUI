import {Injectable} from "@angular/core";
import {environment} from "../../../../../intelcomp-ui/src/environments/environment";
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
