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
    //Envoie le bon format de donnée dans le message, on peut mettre n'importe quoi dedans
    const formdata = new FormData();
    formdata.append("login", login);
    formdata.append("password",password);


    this.service.sendMessage("checkLogin", formdata).subscribe(
      (message) => {
        console.log(message)
        if (message.status === 'error') {
          errormessage = 'Le login ou le mot de passe est incorrect';
        } else {
          this.login=login;
          this.password=password
          this.router.navigateByUrl('/cours');
        }
      }
    )
    return errormessage;


  }
}
