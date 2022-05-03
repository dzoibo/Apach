import { Injectable } from '@angular/core';
import { location, Produit } from '../Models';

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


   getLocation(){
     var Location:location[]=[
       {
          idRegion:1,
          nameRegion:'Centre',
          villeRegion:[
            {idVille:1,
            nameVille:'Yaounde',
            quartierVille:[{
              idQuartier:1,
              nameQuartier:'Byem-assi'
            },
            {
              idQuartier:2,
              nameQuartier:'Nkolondom'
            },
            {
              idQuartier:3,
              nameQuartier:'Madagascar'
            },
            {
              idQuartier:4,
              nameQuartier:'Bastos'
            },
            {
              idQuartier:5,
              nameQuartier:'Jouvence'
            },
            {
              idQuartier:6,
              nameQuartier:'Essos'
            },
            {
              idQuartier:7,
              nameQuartier:'Rond-point Express'
            },
            {
              idQuartier:8,
              nameQuartier:'Cradat'
            },
            {
              idQuartier:8,
              nameQuartier:'Autres'
            }
          ]
        },
            { idVille:2,
              nameVille:'Mbalmayo',
              quartierVille:[{
                idQuartier:9,
                nameQuartier:'Mbalmayo'
              }]
            },
            {idVille:3,
              nameVille:'Obala',
              quartierVille:[{
                idQuartier:10,
                nameQuartier:'Mbalmayo'
              }]
            },
            {idVille:4,
              nameVille:'Autres',
              quartierVille:[{
                idQuartier:11,
                nameQuartier:'Autres'
              }]
            }
      ]
     },
     {
       idRegion:2,
       nameRegion:'Littoral',
       villeRegion:[
        {idVille:5,
        nameVille:'Douala',
        quartierVille:[{
            idQuartier:12,
            nameQuartier:'Akwa'
          },
          {
            idQuartier:13,
            nameQuartier:'Bonapriso'
          },
          {
            idQuartier:14,
            nameQuartier:'Ndogpong'
          },
          {
            idQuartier:15,
            nameQuartier:'Logpom'
          },
          {
            idQuartier:16,
            nameQuartier:'Ndokoti'
          },
          {
            idQuartier:17,
            nameQuartier:'Bonapriso'
          },]
        },
        
        { idVille:6,
          nameVille:'Edea',
          quartierVille:[{
            idQuartier:18,
            nameQuartier:'Edea'
          }]
        },
        {idVille:7,
         nameVille:'Nkongsamba',
         quartierVille:[{
            idQuartier:19,
            nameQuartier:'Nkongsamba'
          }]
        },
        
        {idVille:8,
          nameVille:'Autres',
          quartierVille:[{
            idQuartier:20,
            nameQuartier:'Nkongsamba'
          }]
        }
      ]
    },
    {
      idRegion:3,
      nameRegion:'Ouest',
      villeRegion:[
        { idVille:9,
          nameVille:'Baffoussam',
          quartierVille:[{
            idQuartier:21,
            nameQuartier:'Baffoussam'
          }]
        },
        { idVille:10,
          nameVille:'Bafang',
          quartierVille:[{
            idQuartier:23,
            nameQuartier:'Bafang'
          }]
        },
        { idVille:11,
          nameVille:'Dshang',
          quartierVille:[{
            idQuartier:24,
            nameQuartier:'Dshang'
          }]
        },
        {
          idVille:13,
          nameVille:'Autres',
          quartierVille:[{
            idQuartier:25,
            nameQuartier:'Autres'
          }]
        }
      ]
    },{
      idRegion:4,
      nameRegion:'Autres',
      villeRegion:[
        { idVille:14,
          nameVille:'Autres',
          quartierVille:[{
            idQuartier:26,
            nameQuartier:'Autres'
          }]
        },]
    }
    ]
    return Location;
  }
}
