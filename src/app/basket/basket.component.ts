import { Component, OnInit,Input } from '@angular/core';
import { MainProgectService} from '../main-progect.service';
import { ActivatedRoute} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from '../product';
import {BehaviorSubject,Subject, Subscriber} from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

 
  cart: Product[];
  bill: number;
  count: number;
  constructor(
    private service: MainProgectService,
    private route: ActivatedRoute,
    private location: Location) {}
    
  
  ngOnInit() {
    this.getCart();
    this.updateTotal() ;
  }
  
   goBack(): void {
    this.location.back();
  }

  getCart(){
    return  this.cart = JSON.parse(localStorage.getItem('products'));
   }

  delete(id: number){
    this.cart = JSON.parse(localStorage.getItem('products'));
   
    this.cart = this.cart.filter(x => x.id !== id);
    localStorage.setItem('products', JSON.stringify(this.cart));
    
    this.service.checkCart.next(true);
  }

  
  updateTotal() {
    this.bill = 0;
    for(let i in this.cart){
      this.bill = this.bill + this.cart[i].price * this.cart[i].qty;
      localStorage.setItem('products', JSON.stringify(this.cart));
      this.service.checkCart.next(true);
    }
    localStorage.setItem('products', JSON.stringify(this.cart));
  }
  
  payBill() {
    if(this.cart.length){
      alert("Ваш рахунок : " + this.bill + "$");
    } else {
      alert("Корзина порожня!");
    }
  }


  }


  
  
 
  
  
  
  

