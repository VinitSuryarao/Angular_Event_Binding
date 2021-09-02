import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  Number: number= 1;
  
  ClickSave(): void{
    this.Number = this.Number + 1;
  }
  
  OverText: string="";
  MouseOver(): void{
  this.OverText="This is Number Counter";
  };

}
