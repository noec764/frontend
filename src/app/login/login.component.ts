import {Component, Input, OnInit} from '@angular/core';

import {Observable} from "rxjs";
import {MessageService} from "../message/message.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password= '';
  login= '';
  errormessage='';

  onClick(){
    if (this.password=='' || this.login==''){
      this.errormessage='Vous devez remplir les champs';
    }else {
      this.errormessage='';
    }
    const formdata = new FormData();
    formdata.append("login",this.login);
    formdata.append("mdp",this.password);


    this.service.sendMessage("checkLogin",formdata).subscribe(
      (message) =>{
        console.log(message)

      }
    )

    console.log('Login: '+this.login);
    console.log('Password: '+this.password);
  }

  constructor(private service : MessageService ) {}


  ngOnInit(){

  }

  isHidden(): boolean{
    return this.errormessage.length<1;
  }

}
