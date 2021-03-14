import {Component, Input, OnInit} from '@angular/core';

import {Observable} from "rxjs";
import {AuthentificationService} from "../authentification/authentification.service"

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

    this.errormessage=this.service.sendAuthentification(this.login,this.password);

  }

  constructor(private service: AuthentificationService) {
  }


  ngOnInit() {

  }

  isHidden(): boolean {
    return this.errormessage.length < 1;
  }

}
