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
                      this.myObserver.next("" + this.counts);
                     
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


   getPromise(a:number , b:number) : Promise<any>
   {
        let  p = new Promise( (resolve,reject) => 
        {
                if(a >b )
                {
                    resolve("Favourite Result");
                }else
                {
                    reject("Non - Favourite Result");
                }
        });

        return p;
    }

    testPromiseRace()
    {
        var promise1 = new Promise(function(resolve, reject) {
            //setTimeout(resolve, 500, 'one');
            //resolve("Hello From first Promise..");
            console.log("Promise 1 executed..");
            reject("Rejecting from promise 1");
        });
        
        var promise2 = new Promise(function(resolve, reject) {
           // setTimeout(resolve, 100, 'two');
            console.log("Promise 2 executed..");
            resolve("Hello From second Promise..");
        });
        
        Promise.race([promise1, promise2]).then(value =>{
          console.log(value);
         
        })
        .catch(err => {
            console.log(err);
        });
    }

}
