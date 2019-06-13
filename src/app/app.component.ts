import { Component, OnInit } from '@angular/core';
import { SliderComponentComponent } from './slider-component/slider-component.component';
import { MainProgectService } from './main-progect.service';
import { Product } from './product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  quantity: number;
  cart: Product[];

  constructor(private service: MainProgectService) {}

  ngOnInit(){
    this.getQuantity();
    this.service.checkCart.subscribe(val => {
      if(val) this.getQuantity();
    
    })
  }

  getQuantity(){
   const arr = JSON.parse(localStorage.getItem('products'));
   this.quantity = arr && arr.length 
    ? arr.reduce((total,elem) => total += elem.qty, 0)
    : 0;
  }
  

}
