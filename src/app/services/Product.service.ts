import { Injectable } from '@angular/core';
import { Produit } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList:Produit[]=[]
  constructor() {

   }
   getProductList():Produit[]{// this function is to get the list of all product...
    // for now it is just for the test...
    this.productList=[
      {
        descProduit:'C\'est une edition limité de la maison PaulGaby du Cameroun',
        nameProduit:'MboaShoes',
        idProduit:1,
        idFournisseur:1,
        qtiteProduit:10,
        ancienPrix:0,
        nouveauPrix:1600,
        image1:'assets/img/rcuzej21.jpg',
        image2:'',
        image3:'',
        promotion:1000,
        pourcentgeReduction:0,
      },
      {
        descProduit:'C\'est une edition limité de la maison PaulGaby du Cameroun',
        nameProduit:'Ecouteurs livre2',
        idProduit:2,
        idFournisseur:1,
        qtiteProduit:10,
        ancienPrix:1350,
        nouveauPrix:1000,
        image1:'assets/img/mMYQiKv.jpg',
        image2:'',
        image3:'',
        promotion:1000,
        pourcentgeReduction:0,
      },
      {
        descProduit:'C\'est une edition limité de la maison PaulGaby du Cameroun',
        nameProduit:'MboaShoes',
        idProduit:3,
        idFournisseur:1,
        qtiteProduit:10,
        ancienPrix:0,
        nouveauPrix:1300,
        image1:'assets/img/rcuzej21.jpg',
        image2:'',
        image3:'',
        promotion:1000,
        pourcentgeReduction:0,
      },
      {
        descProduit:'C\'est une edition limité de la maison PaulGaby du Cameroun',
        nameProduit:'Ecouteurs livre2',
        idProduit:4,
        idFournisseur:1,
        qtiteProduit:10,
        ancienPrix:1450,
        nouveauPrix:1300,
        image1:'assets/img/lpBdEgz.jpg',
        image2:'',
        image3:'',
        promotion:1000,
        pourcentgeReduction:0,
      },
      {
        descProduit:'C\'est une edition limité de la maison PaulGaby du Cameroun',
        nameProduit:'MboaShoes',
        idProduit:5,
        idFournisseur:1,
        qtiteProduit:10,
        ancienPrix:1750,
        nouveauPrix:1400,
        image1:'assets/img/rcuzej21.jpg',
        image2:'',
        image3:'',
        promotion:1000,
        pourcentgeReduction:0,
      },
      {
        descProduit:'C\'est une edition limité de la maison PaulGaby du Cameroun',
        nameProduit:'Ecouteurs livre2',
        idProduit:6,
        idFournisseur:1,
        qtiteProduit:10,
        ancienPrix:2350,
        nouveauPrix:1600,
        image1:'assets/img/n600TBvk.jpg',
        image2:'',
        image3:'',
        promotion:1000,
        pourcentgeReduction:0,
      },
    ]
    return this.productList;
   }
  
}

