import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, firstValueFrom} from 'rxjs';
import { User } from '../Models';
import { LoginService } from './login.service';
import { Platform } from '@angular/cdk/platform';
declare var require: any

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  User= new User();
  permission!:string;
  isAuth = false;
  language='en_US';
  languageChange: BehaviorSubject<string> 
  
  constructor(private loginService:LoginService,private platform:Platform, private cookieService:CookieService){
    if(this.cookieService.check('language')){
      if(this.decryptData(cookieService.get('language'))==='fr_FR'){
        this.language='fr_FR'
      }else{
        this.language='en_US'
      }
    }
    else{
      this.language='en_US';
    }
    this.languageChange= new BehaviorSubject<string>(this.language);
    if(cookieService.check('userId')&&cookieService.check('userName')&&cookieService.check('userImage')&&cookieService.check('userParner')){
      try {
        this.User.userName=this.decryptData(cookieService.get('userName'));
        this.User.password=this.decryptData(cookieService.get('userPassword'));
        this.User.userImage=this.decryptData(cookieService.get('userImage'));
        this.permission=this.decryptData(cookieService.get('permission'));
        this.isAuth=true;
      } catch (error) {
        this.isAuth=false
      }
    }
  }


  async GetUser(userName:string,passWord:string){
    console.log('lang',this.language);
    const data: any = await firstValueFrom(this.loginService.authenticateUser(userName, passWord));
      if(data.WindowTabData.Error){
        console.log(data.WindowTabData.Error);
        return 'null';
      }else{
        var userinfo=data.WindowTabData.DataSet.DataRow.field;
        this.User.idUser=userinfo[0].val;
        this.User.userName=userinfo[1].val;
        this.User.userTown='Cashier';
      }
      return 'ok';
  }

  async createUser(Name:string,Surname:string,Email:string,Quarter:string,Phone:string,Password:string){
    const data: any = await firstValueFrom(this.loginService.authenticateUser(Name, Password));
    if(data){}
  }


  createVendor(Name:string,Surname:string,Shop:string,Email:string,Quarter:string,Phone:string,Password:string){

  }

  createCookies(){
    var timeOut;
    if(this.platform.ANDROID || this.platform.IOS){
      timeOut=0;
    }else{
      timeOut=86400;
    }
    this.cookieService.set('userName', this.encryptData(this.User.userName),{ expires: timeOut });
    this.cookieService.set('userPassword', this.encryptData(this.User.password),{ expires: timeOut });
    this.cookieService.set('userImage', this.encryptData(this.User.userImage),{ expires: timeOut });
    this.cookieService.set('permission', this.encryptData(this.permission),{ expires: timeOut });
   // this.cookieService.set('language', this.encryptData(this.language),{ expires: 10000000000000000000});
  }
  encryptData(text:string){
    var CryptoJS = require("crypto-js");
    return CryptoJS.AES.encrypt(text, 'MontagneP2022').toString(); 
  }
  
  decryptData(text:string){
    var CryptoJS = require("crypto-js");
    var bytes  = CryptoJS.AES.decrypt(text, 'MontagneP2022');// the password
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  signIn() {
      return new Promise(
      (resolve) => {
          setTimeout(
          () => {
              this.isAuth = true;
              resolve(true);
          }, 1
          );
      }
      );
  }

  signOut() {
      this.isAuth = false;
  }
}

