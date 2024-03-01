import { Component, OnInit } from '@angular/core';
import { AngularFireRemoteConfig } from '@angular/fire/compat/remote-config';

@Component({
  selector: 'firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {

  title = 'test';
  
  constructor(private remoteConfig: AngularFireRemoteConfig) {
      //this.remoteConfig.parameters;
      
    //console.log(this.remoteConfig.parameters);  
    
   
    console.log(this.remoteConfig.parameters);
  //  console.log(this.remoteConfig.getValue('Varibale_test'));
  this.remoteConfig.getValue('Varibale_test').then((response)=>{
         console.log(response);
    }).catch(error => {console.log(error)});

    
   
   }
   

   
  ngOnInit(): void {
    
  }

}
