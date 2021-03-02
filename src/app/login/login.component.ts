import {Component, Input, OnInit} from '@angular/core';

import {Observable} from "rxjs";
import {MessageService} from "../message/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password = '';
  login = '';
  errormessage = '';

  onClick() {
    if (this.password == '' || this.login == '') {
      this.errormessage = 'Vous devez remplir les champs';
    } else {
      this.errormessage = '';
    }

    //Envoie le bon format de donnée dans le message, on peut mettre n'importe quoi dedans
    const formdata = new FormData();
    formdata.append("login", this.login);
    formdata.append("password", this.password);


    this.service.sendMessage("checkLogin", formdata).subscribe(
      (message) => {
        console.log(message)
        if (message.status === 'error') {
          this.errormessage = 'Le login ou le mot de passe est incorrect';
        } else {

          this.router.navigateByUrl('/cours');
        }
      }
    )
    console.log('Login: ' + this.login);
    console.log('Password: ' + this.password);
  }

  constructor(private service: MessageService, private router: Router) {
  }


  ngOnInit() {

  }

  isHidden(): boolean {
    return this.errormessage.length < 1;
  }

}
