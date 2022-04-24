
export class Produit{
   public idProduit:number;
   public nameProduit:String;
   public descProduit:String;
   public ancienPrix:number;
   public nouveauPrix:number;
   public promotion:number;
   public pourcentgeReduction:number;
   public qtiteProduit:any;
   public idFournisseur:number;
   public image1:string;
   public image2:string;
   public image3:string
    constructor(){
        this.descProduit='';
        this.nameProduit='';
        this.idProduit=0;
        this.idFournisseur=0;
        this.qtiteProduit=0;
        this.ancienPrix=0;
        this.nouveauPrix=0;
        this.image1='';
        this.image2='';
        this.image3='';
        this.promotion=0;
        this.pourcentgeReduction=0
    }

}
