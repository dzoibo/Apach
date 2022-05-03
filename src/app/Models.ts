
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
export class User{
    public idUser:number;
    public userName:string;
    public userCountry:string;
    public userTown:string;
    public dateCreation:string;
    public dateModification:string;
    public email:string;
    public password:string;
  userImage: string;
        constructor(){
            this.idUser=0;
            this.userName='';
            this.userTown='';
            this.userCountry='';
            this.dateCreation='';
            this.dateModification='';
            this.email='';
            this.password='';
            this.userImage='';
        }
}

export class Fournisseur extends User{
    public idFournisseur:number;
    public etatFournisseur:string;
        constructor(){
            super();// this function is to call the constructor of the mother class before initialize the new one
            this.idFournisseur=0;
            this.etatFournisseur='';
        }
}
export class location{
    public idRegion:number;
    public nameRegion:string;
    public villeRegion:ville[];
    constructor(){
        this.idRegion=0;// this function is to call the constructor of the mother class before initialize the new one
        this.nameRegion='';
        this.villeRegion=[];
    }
}
export class Quartier{
    public idQuartier:number;
    public nameQuartier:string;
    constructor(){
        this.idQuartier=0;
        this.nameQuartier='';
    }
}
export class ville{
    public idVille:number;
    public nameVille:string;
    public quartierVille:Quartier[];
    constructor(){
        this.idVille=0;// this function is to call the constructor of the mother class before initialize the new one
        this.nameVille='';
        this.quartierVille=[];
    }
}
