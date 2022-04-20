import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGooglePlusG, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {faMapMarked, faSearch,faHeart,faTimes, faUser, faUserPlus, faEye, faAngleRight, faPhoneAlt, faEnvelope, faMapMarkedAlt, faMapMarkerAlt, faMapMarker, faBars, faAngleDown, faCity, faHome, faLock, faPhone, faArchway, faHeartPulse, faHeartCircleBolt, faHeartCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeart2 } from '@fortawesome/free-regular-svg-icons';
import * as $ from 'jQuery';
import { AcceuilService } from '../services/acceuil.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})


export class HomepageComponent implements OnInit {
  
  customOptions=[];
  faSearch=faSearch;
  faMark=faMapMarked;
  faHeart=faHeart;
  faHeart2=faHeart2;
  faTimes=faTimes;
  faUser=faUser;
  faEye=faEye;
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
  SignIn=false;
  signInVendor=false;
  login=false;

  location=false;
  signIn=false;
  headerDialog!:string;
  products=[{
    name:'yes',
  },
  {
    name:'yes',
  }]
  responsiveOptions:any;
  shortCutActived=false;//this variable is to know if one shortCut is already activated to desactive it before display the other one and evide the conflict between them;

  
  constructor(private acceuil:AcceuilService) {
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
    this.headerDialog='Localisation';
   setTimeout(()=>{
    this.location=true;
   },1000)
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
	  $('.list-card').addClass('actives');
    $('.categorie-first-box1').slideUp();// we hide the search bar
    $('.categorie-first-box1').removeClass('actives');
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
    this.showDialog('Location');
    this.closeFavorite();
    $('.categorie-first-box1').slideUp();// we hide the search bar
    $('.categorie-first-box1').removeClass('actives');
  }
  closeFavorite(){
    document.querySelector('.list-card')?.classList.remove("actives")
  }
  hoverProduct(){
        $(".image-hover2 img").addClass('zoom-effect-img');
        $(".image-hover2").css("border","1px solid #f3f3f3")
        $(".right-2").css("opacity","9");
        $(".section-container-images-shop2-box1a-fils-prix2").addClass('effect-show-prix');
        $(".section-container-images-shop2-box1a-fils-prix-btn2").css("opacity","9");
  }
  outProduct(){
      $(".image-hover2 img").removeClass('zoom-effect-img');
      $(".image-hover2").css("border","none")
      $(".section-container-images-shop2-box1a-fils-img-right").css("opacity","0");
      $(".section-container-images-shop2-box1a-fils-prix2").removeClass('effect-show-prix');
      $(".section-container-images-shop2-box1a-fils-prix-btn2").css("opacity","0");
  }

  
	/* changement de couleur sur le menu
	
	$('nav ul li a').click(function(){
	  $('nav ul li a').removeClass('active');
	  $(this).closest('nav ul li a').addClass('active');
	  
	});*/
}
