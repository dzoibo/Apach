import { Component, OnDestroy, OnInit } from '@angular/core';
import { faFacebookF, faGooglePlusG, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {faTrashAlt,faMapMarked, faSearch,faHeart,faTimes, faUser, faUserPlus, faEye, faAngleRight, faPhoneAlt, faEnvelope, faMapMarkedAlt, faMapMarkerAlt, faMapMarker, faBars, faAngleDown, faCity, faHome, faLock, faPhone, faArchway, faHeartPulse, faHeartCircleBolt, faHeartCircleExclamation, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeart2 } from '@fortawesome/free-regular-svg-icons';
import * as $ from 'jQuery';
import {  ProductService } from '../services/Product.service';
import { location, Produit, Quartier, User, ville } from '../Models'
import { Platform } from '@angular/cdk/platform';
import {  Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { AuthService } from '../services/auth.service';
import { ConnectionService } from 'ng-connection-service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})





export class HomepageComponent implements OnInit,OnDestroy {
  
  //all these propertiesbellow are the fontawesome for angular 
  fashowEye=faEyeSlash;
  faEyeSlash=faEyeSlash;
  faSearch=faSearch;
  faMark=faMapMarked;
  faHeart=faHeart;
  faHeart2=faHeart2;
  faTimes=faTimes;
  faUser=faUser;
  faEye=faEye;
  faTrash=faTrashAlt;
  faUserPlus=faUserPlus;
  faAngleRight=faAngleRight;
  faPhoneAlt=faPhoneAlt;
  faFacebook=faFacebookF;
  faGoogle=faGooglePlusG;
  faTwitter=faTwitter;
  faLinkedin=faLinkedin;
  faWhatsapp=faWhatsapp;
  faEnvelope=faEnvelope;
  faMapMarket=faMapMarkerAlt;
  faAngleDown=faAngleDown;
  faCity=faCity;
  faHome=faHome
  faLock=faLock;
  faPhone=faPhone;
  faArchway=faArchway;
  faBars=faBars;

  NameError!:string;
  PasswordError!:string;
  LoginError="";
  loginForm!:FormGroup;
  signInForm!:FormGroup;
  signInVendorForm!:FormGroup;
  User!:User;
  authStatus!:boolean;
  //online: boolean = navigator.onLine; maybe this can tcheck if there is connection in the angular app
  showPassword:boolean=false;
  spinner=false;
  selectedLanguage!:string;
  title!:string;
  permission:string='cashierOnly';
  identification!:string;
  error1!:string;
  error2!:string;
  error3!:string;

  //@ViewChild('loginName') inputName: any  ; this is the case where we wwant to make validation using the enter keys and the submitByEnterFunction
  customOptions=[];

  
  products=[{// this is just a simple template to use in the slide that we make using prime ng in the template file
    name:'yes',
  },
  {
    name:'yes',
  }]
  SignIn=false;
  signInVendor=false;
  login=false;

  location=false;
  signIn=false;
  headerDialog!:string;
  
  responsiveOptions:any;
  shortCutActived=false;//this variable is to know if one shortCut is already activated to desactive it before display the other one and evide the conflict between them;
  
  productList:Produit[]=[];// the variable who will get the list of product all...
  productSelected:{
    product:Produit,
    quantity:number,
  }[]=[];
  totalFav:number;
  status='OFFLINE';
  isConnected!:boolean;
  Place!:location[];
  Ville:ville[]=[];
  Quartier:Quartier[]=[];

  constructor(private connectionService:ConnectionService, private authService:AuthService, private formBuilder:FormBuilder,private messageService:MessageService ,private router:Router,  private productService:ProductService,private platform:Platform) {
    this.connectionService.monitor().subscribe(isConnected=>{
      this.isConnected=isConnected;
      if (this.isConnected) {
        this.status = "ONLINE";
      }
      else {
        this.status = "OFFLINE";

      }
    })
    console.log(this.status)
    
    this.initForm();
    this.totalFav=0;
    this.headerDialog='Connexion';
    setTimeout(()=>{
      this.login=true;
    },1000)
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
    this.Place=this.productService.getLocation();
   }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
  getVille(event:any){
    var idRegion:number= +event.target.value
    for ( const Region of this.Place ){
      if(Region.idRegion===idRegion){
        this.Ville=Region.villeRegion
      }
    }
  }

  getQuartier(event:any){
    var idVille:number= +event.target.value
    for ( const Region of this.Place ){
      for(const town of Region.villeRegion){
        if(idVille===town.idVille){
          this.Quartier=town.quartierVille
        }
      }
    }
  }

  ngOnInit(): void {
    this.productList=this.productService.getProductList();
  }
  
   addFav(Product:Produit){
     $('html,body').animate({scrollTop:0},400,'swing',function(){
     })
    for (const product of this.productSelected){
        if(Product.idProduit===product.product.idProduit){
          alert('Vous avez deja ajoute ce produit à vos favoris');
          return false;
      }
    }
    this.productSelected.push({product:Product,quantity:1});
    this.getPrice()
    return true;
   }

   removeFav(id:number){
    for (const Product of this.productSelected){
      if(id===Product.product.idProduit){
        var index= this.productSelected.indexOf(Product);
        this.productSelected.splice(index,1);
        this.getPrice()
        return false
      }
    }
    return true
  }

  
  public onPasswordToggle(): void {
    this.showPassword=!this.showPassword
    if(this.fashowEye===this.faEye){
      this.fashowEye=this.faEyeSlash
    }else{
      this.fashowEye=this.faEye
    }
  }
  changeQuantity(event:any,id:number){
    for (const Product of this.productSelected){
      if(id===Product.product.idProduit){
        try {
          const bar:any=$(event.target).val();
          Product.quantity=bar;
        } catch (error) {
          console.log("erreur",error);
        }
      }
    }
    this.getPrice();
  }

  getPrice(){
    var price=0
    for (const Product of this.productSelected){
      price = price + (Product.quantity*Product.product.nouveauPrix);
    }
    this.totalFav=price;
  }

  showDialog(action:string){
    this.LoginError="";
    this.signIn=false;
    this.location=false;
    this.signInVendor=false;
    this.login=false;
    if(action==='signIn'){
      this.signIn=true;
      this.headerDialog='';
      this.headerDialog="S'inscrire";
    }else if(action==='signInVendor'){
      this.signInVendor=true;
      this.headerDialog="S'inscrire en tant que vendeur";
    }else if(action==='Localisation'){
      this.location=true;
      setTimeout(() => {
        this.headerDialog='Localisation'
      }, 2000);
    }
    else{
      this.login=true;
      this.headerDialog='Connexion';
    }
  }

  showFavorite(){
      $('#list-card').slideDown();
        
  }
  shortCutFavorite(){
    if(this.platform.ANDROID || this.platform.IOS){
      $('.categorie-first-box1').slideUp();// we hide the search bar
    }
    setTimeout(() => {// we use the time out to be sure that if there is a search bar we will desappear before the favorite side appear
      $('.list-card').addClass('actives');
      $('.categorie-first-box1').removeClass('actives');
    }, 500);
	  
  }
  shortCutSearch(){
    this.closeFavorite();
    if($('.categorie-first-box1').hasClass('actives')){
			$('.categorie-first-box1').slideUp();
			$('.categorie-first-box1').removeClass('actives');
		} else {
			$('.categorie-first-box1').addClass('actives');
			$('.categorie-first-box1').slideDown();
		}
  }
  
  shortCutLocation(){
    if(this.location===true){
      this.location=false;
    }
    this.showDialog('Localisation');
    this.closeFavorite();
    $('.categorie-first-box1').slideUp();// we hide the search bar
    $('.categorie-first-box1').removeClass('actives');
  }
  closeFavorite(){
    document.querySelector('.list-card')?.classList.remove("actives")
  }
  hoverProduct(id:number){
        $(".image-hover"+id+" img").addClass('zoom-effect-img');
        $(".image-hover"+id+"").css("border","1px solid #f3f3f3")
        $(".right-"+id+"").css("opacity","9");
        $(".section-container-images-shop2-box1a-fils-prix"+id+"").addClass('effect-show-prix');
        $(".section-container-images-shop2-box1a-fils-prix-btn"+id+"").css("opacity","9");
  }
  outProduct(id:number){
      $(".image-hover"+id+" img").removeClass('zoom-effect-img');
      $(".image-hover"+id+"").css("border","none")
      $(".section-container-images-shop2-box1a-fils-img-right").css("opacity","0");
      $(".section-container-images-shop2-box1a-fils-prix"+id+"").removeClass('effect-show-prix');
      $(".section-container-images-shop2-box1a-fils-prix-btn"+id+"").css("opacity","0");
  }

  goToMessage(){
    this.closeFavorite();
    $('.categorie-first-box1').slideUp();// we hide the search bar
    $('.categorie-first-box1').removeClass('actives');
    this.router.navigate(['/message'])
  }
	initForm() {
    this.loginForm = this.formBuilder.group({
      Email: ['',Validators.required],
      Password: ['',[Validators.minLength(6),Validators.required]],
    });

    this.signInVendorForm=this.formBuilder.group({
      Name: ['',Validators.required],
      Surname: ['',Validators.required],
      Email: ['',Validators.required],
      Phone: ['',Validators.required],
      Shop: ['',Validators.required],
      Region: ['',Validators.required],
      Town: ['',Validators.required],
      Quarter: ['',Validators.required],
      Password: ['',[Validators.minLength(6),Validators.required]],
      ConfirmPassword: ['',[Validators.minLength(6),Validators.required]],
      Condition:['',Validators.required]

    });
    
    this.signInForm=this.formBuilder.group({
      Name: ['',Validators.required],
      Surname: ['',Validators.required],
      Email: ['',Validators.required],
      Phone: ['',Validators.required],
      Region: ['',Validators.required],
      Town: ['',Validators.required],
      Quarter: ['',Validators.required],
      Password: ['',[Validators.minLength(6),Validators.required]],
      ConfirmPassword: ['',[Validators.minLength(6),Validators.required]],
      Condition:['',Validators.required]
    });
  }

   
  async Connection(){
    console.log('connection')
    this.LoginError='';
    if(!this.status){
      this.LoginError=this.error1;  //'No connection';
      return false;
    }
    const formValue = this.loginForm.value;
    let login:any;
        this.spinner=true;
          try
          {
            login=  await this.authService.GetUser(formValue['Name'],formValue['Password']);
            this.spinner=false;

          } catch (error) {
            this.spinner=false;
            this.LoginError= this.error2, //'Server error please try again';
            console.log('erroooor', error, JSON.stringify(error), formValue['Name'], formValue['Password'],formValue['Language']);
            return false;
          }
          if( login !== 'null' ){
            this.authService.signIn().then(
             async () => {
                this.initForm()
                this.LoginError='';
                try {
                  this.User=new User();
                  this.authStatus = this.authService.isAuth;
                  this.authService.User=login;// so this function is suppose to return a new user
                } catch (error) {
                 console.log(error) 
                } 
              }
            ); 
          }
          else{
            this.LoginError=this.error3 //'Invalid Password or Username';
          }
          return true 
        }
     async Inscription(type:number)
     {
      this.LoginError='';
      if(!this.status){
        this.LoginError=this.error1;  //'No connection';
        return false;
      }
      this.spinner=true
      var login!:any;
       if (type===1){//it's an simple inscription
        const formValue=this.signInForm.value 
          if(formValue['Password']!==formValue['ConfirmPassword']){
            this.LoginError='Veuillez entrer des mots de passe identiques';
            window.location.hash = '#errorSignIn';
            return false
          }
          login=await this.authService.createUser(formValue['Name'],formValue['Surname'], formValue['Email'],formValue['Quarter'],formValue['Phone'],formValue['Password']);
       }else{// it's a vendor's inscription
        const formValue=this.signInVendorForm.value
        if(formValue['Password']!==formValue['ConfirmPassword']){
          this.LoginError='Veuillez entrer des mots de passe identiques';
          window.location.hash = '#errorVendor';
          return false
        }// we shoould add awaiton this function after..
        login=this.authService.createVendor(formValue['Name'],formValue['Surname'],formValue['Shop'],formValue['Email'],formValue['Quarter'],formValue['Phone'],formValue['Password']);
       }
       return true;
     } 

        
}

