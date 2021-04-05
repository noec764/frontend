import {Injectable} from '@angular/core';
import {MessageService} from "../message/message.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  login: string;
  password: string;


  constructor(private service: MessageService,private router: Router) {
  }

  sendAuthentification(login: string, password: string) {
    let errormessage = '';

    this.service.sendMessage("checkLogin", {login: login,password:password}).subscribe(
      (message) => {
        console.log(message)
        if (message.status === 'error') {
          errormessage = 'Le login ou le mot de passe est incorrect';
        } else {
          this.login=login;
          this.password=password
          this.router.navigateByUrl('cours');
        }
      }
    )
    return errormessage;


  }
}
