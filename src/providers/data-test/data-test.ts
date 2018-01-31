import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { ISubscription } from "rxjs/Subscription";

@Injectable()
export class DataTestProvider {

  tickData: any;
  observerId: any;
  myObserver: any;
  counts: any=1;
  timer: any;
  isRunning: boolean=false;

  sub: Subscription;

  constructor()
  {
      this.tickData = "";
  }


  getTick(): Observable <any>
  {
      this.observerId = Observable.create(observer => {
          this.myObserver = observer;
          this.StartTimer();
      });
      
      //this.observerId.add(this.StopTimer());
      
      
      return this.observerId;
  }

  

  StartTimer()
  {
      console.log("Starting Timer.")
      this.isRunning = true;
      this.tick();
  }
  StopTimer()
  {
      console.log("Stopping Timer.")
      this.isRunning = false;
      clearTimeout(this.timer);
  }
   
   tick()
   {
      this.timer = setTimeout(x => 
          {
                  if(this.isRunning)
                  {
                      console.log("Sending "+ this.counts);
                      this.myObserver.next("hello " + this.counts);
                     
                      this. counts = this.counts + 1 ;
                      this.tick();
                  }
              
          }, 500);

      // this.timer =  setTimeout(function()
      //     { 
      //           if(this.isRunning)
      //           {
      //               console.log("Ticking...");
      //               this.myObserver.next("hello " + this.counts);
      //               this. counts = this.counts + 1 ;
      //               this.tick();
      //           }
      //     },
      //     500);    

    
   }
}
