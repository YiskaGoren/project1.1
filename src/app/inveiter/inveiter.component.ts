import { Component, OnInit } from '@angular/core';
import{InviterViewModel} from './inviter-view-model'
import { Inviter } from '../model/inviter';
import{PartyService} from '../data/party-service';

@Component({
  selector: 'app-inveiter',
  templateUrl: './inveiter.component.html',
  styleUrls: ['./inveiter.component.css']
})
export class InveiterComponent implements OnInit {
  private newInviter: InviterViewModel = new InviterViewModel();
  private inviters: Inviter[] = [];
  
  constructor(private partyService: PartyService) { }

  ngOnInit() {
    this.partyService.getInviter().subscribe(inviter=>{
      this.inviters = inviter;
    });
  }


  private AddInviter(){    
    this.partyService.AddInviter(this.newInviter).then(()=>{
       this.newInviter = new InviterViewModel();
       this.partyService.getInviter().subscribe(inviters=>{
         this.inviters = inviters;
        });
      });
      
      return true;
  }

}

  