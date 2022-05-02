import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit,OnDestroy {

  id:number=0;
  
  constructor(private messageService:MessageService, private route:ActivatedRoute) { 
/* in the cas where we want to use router
    this.route.paramMap.subscribe((params: ParamMap) => {
        const param=params.get('id')
        this.id=param?+param:0;// we do this because objet can be null
    })
*/
  }
  

  ngOnInit(): void {
    if(this.messageService.idReceiver!==0){
      if(this.id===this.messageService.idReceiver){
        // we don't need to download all again
      }else{
        this.id=this.messageService.idReceiver
      }
    }else{
      //we display only the conversation...
    }
    
  }

  ngOnDestroy(): void {
    //On reinitialise la partie des message
  }
}
