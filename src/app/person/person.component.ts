import { Component, OnInit } from '@angular/core';
import { GuestViewModel } from './guest-view-model';
import { PartyService } from '../data/party-service';
import { guest } from '../model/guest';
import { HtmlParser } from '@angular/compiler';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {

private newGuest: GuestViewModel = new GuestViewModel();
private guests: guest[] = [];

  constructor(private partyService: PartyService) {
    
   }

  ngOnInit() {
   this.partyService.getGest().subscribe(guests=>{
      this.guests = guests;
    });
  } 
   private AddGuest(){    
        this.partyService.AddGuest(this.newGuest).then(()=>{
           this.newGuest = new GuestViewModel();
           this.partyService.getGest().subscribe(guests=>{
             this.guests = guests;
            });
          });
          
          return true;
      }
      //
}
