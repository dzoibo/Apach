import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGooglePlusG, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {faTrashAlt,faMapMarked, faSearch,faHeart,faTimes, faUser, faUserPlus, faEye, faAngleRight, faPhoneAlt, faEnvelope, faMapMarkedAlt, faMapMarkerAlt, faMapMarker, faBars, faAngleDown, faCity, faHome, faLock, faPhone, faArchway, faHeartPulse, faHeartCircleBolt, faHeartCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeart2 } from '@fortawesome/free-regular-svg-icons';
import * as $ from 'jQuery';
import {  ProductService } from '../services/Product.service';
import { Produit } from '../Models'
import { Platform } from '@angular/cdk/platform';

export interface ab {
  a?: number;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})





export class HomepageComponent implements OnInit {
  
  //all these propertiesbellow are the fontawesome for angular 
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

  constructor(private productService:ProductService,private platform:Platform) {
    this.totalFav=0;
    this.headerDialog='Localisation';
    setTimeout(()=>{
      this.location=true;
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
   }

  ngOnInit(): void {
    this.productList=this.productService.getProductList()
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
    this.totalFav=Product.nouveauPrix+this.totalFav;
    return true;
   }

   removeFav(id:number){
    for (const Product of this.productSelected){
      if(id===Product.product.idProduit){
        var index= this.productSelected.indexOf(Product);
        this.productSelected.splice(index,1);
        this.totalFav=this.totalFav-Product.product.nouveauPrix;
        return false
      }
    }
    return true
  }

  changeQuantity(event:any,id:number){
    console.log($(event.target).val());
    for (const Product of this.productSelected){
      if(id===Product.product.idProduit){
        try {
          
          Product.product.qtiteProduit=$(event.target).val()
        } catch (error) {
          
        }
      }
    }
  }

  showDialog(action:string){
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

  
	/* changement de couleur sur le menu
	
	$('nav ul li a').click(function(){
	  $('nav ul li a').removeClass('active');
	  $(this).closest('nav ul li a').addClass('active');
	  
	});*/
}
