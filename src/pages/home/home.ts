import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { DataTestProvider } from '../../providers/data-test/data-test';

import {Pojo} from '../../app/models/Pojo';
import { SubPojo } from '../../app/models/SubPojo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage 
{
  id: any;

  value: any;

  pResult:number;

  constructor(public data: DataTestProvider) {

      let p = new Pojo("Jayesh" , "Ionic");
      p.setName("Jayesh") ;
      p.setDetail("Expert");

      let s = new SubPojo("Albert", "ExpertData" ,"India");
      s.setCountry("India");

      console.log("Pojo Detail is : " + p.get());
      console.log("SubPojo Detail is : " + s.get());
      
  }

  start()
  {
    this.id = this.data.getTick().subscribe(data => {
      this.value = data;
      //console.log("Received : " + data);
    });
  }

  stop()
  {
      this.id.unsubscribe();
      this.data.StopTimer();
  }

  promiseTest(a: number, b: number)
  {
     this.data.getPromise(a,b).then(data =>
      {
       alert(data);
      }
    ).catch(err => 
      {
       alert(err);
      });
  }
  
  promiseRaceTest()
  {
    this.data.testPromiseRace();
  }
 

}
