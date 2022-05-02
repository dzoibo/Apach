import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  authenticateUser(userName:string,userPassword:string){
    //
   var reponse = new Observable();
   return reponse;
  }
}
