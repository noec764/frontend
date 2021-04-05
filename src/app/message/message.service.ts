import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginComponent} from '../login/login.component'
import {environment} from "../../environments/environment";

export interface PhpData {
  status: string;
  data: any;
}


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) {
  }

  sendMessage(url: string, data: any): Observable<PhpData>{
    return this.http.post<PhpData>(environment.urlbase.concat(url), data, {withCredentials: true});
  }

}
