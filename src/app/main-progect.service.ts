import { Injectable } from '@angular/core';
import { SliderComponentComponent } from './slider-component/slider-component.component';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import {BehaviorSubject, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainProgectService {

  checkCart: Subject<boolean> = new Subject();
 

  constructor() {}

  products: Product[] = [
    {id: 1, name: 'Baсkpack Navy Blue', photo:'./assets/images/bag/bag_4.jpg',price: 100,qty: 1},
    {id: 2, name: 'Pink Bag "Sport"', photo:'./assets/images/bag/bag_5.jpg', price: 99,qty: 1},
    {id: 3, name: 'Bag "Just Dance"', photo:'./assets/images/bag/bag_7.jpg', price: 95,qty: 1},
    {id: 4, name: 'Dress "Flora"', photo:'./assets/images/dress/dress7.jpg',price: 111,qty: 1},
    {id: 5, name: 'Tracksuit', photo:'./assets/images/dress/dress8.jpeg',price: 99,qty: 1},
    {id: 6, name: 'Dress "Pearl"', photo:'./assets/images/dress/dress6.jpg',price: 89,qty: 1},
    {id: 7, name: 'Bag "Micky"', photo:'./assets/images/bag/bag_10.jpeg', price: 110,qty: 1},
    {id: 8, name: 'Bag "Pole Sport"', photo:'./assets/images/bag/bag_2.jpg',price: 80,qty: 1},
    {id: 9, name: 'Bag "Pole Dance"', photo:'./assets/images/bag/bag_9.jpg',price: 109,qty: 1},
    {id: 10, name: 'Dress kezhual', photo:'./assets/images/dress/dress5.jpeg',price: 89,qty: 1},
    {id: 11, name: 'Dress "Sport"', photo:'./assets/images/dress/dress3.jpeg',price: 150,qty: 1},
    {id: 12, name: 'Dress "Romantic"', photo:'./assets/images/dress/dress9.JPG',price: 129,qty: 1},
    {id: 13, name: 'Bag "Yoga"', photo:'./assets/images/bag/bag_3.jpg',price: 105,qty: 1},
    {id: 14, name: 'Pink Bag "Pole Dance"', photo:'./assets/images/bag/bag_11.JPG',price: 103,qty: 1},
    {id: 15, name: 'Bag "Time To Pole"', photo:'./assets/images/bag/bag_12.jpeg',price: 114,qty: 1},
    {id: 16, name: 'Bag "Patterns"', photo:'./assets/images/bag/bag_13.JPG',price: 125,qty: 1},
    {id: 17, name: 'Suit "Sport"', photo:'./assets/images/dress/dress10.jpeg',price: 135,qty: 1},
    {id: 18, name: 'Dress "Red"', photo:'./assets/images/dress/dress4.jpg',price: 155,qty: 1},
    {id: 19, name: 'Dress "Fur"', photo:'./assets/images/dress/dress2.jpg',price: 120,qty: 1},
    {id: 20, name: 'Dress "Black"', photo:'./assets/images/dress/dress11.jpg',price: 145,qty: 1},
  ];

  
  get(): Product[]{
    return this.products; 
  }

  getselectedProduct(id:number): Observable<Product> {
    return of(this.products.find(prod => prod.id === id));
  }
  
  addToCart(prod){
    const cart = JSON.parse(localStorage.getItem('products'));
    if(cart){
      let isProdExist = false;
      cart.forEach(x => {
        if(x.id === prod.id){
          x.qty++;
          isProdExist = true;
        }
        console.log(cart)
      })
      
      if(!isProdExist) cart.push(prod);
      this.checkCart.next(true);
      localStorage.setItem('products',JSON.stringify(cart));
  }else{
    this.checkCart.next(true);
    localStorage.setItem('products',JSON.stringify([prod]));
  }
    this.checkCart.next(true);
  }

 
  }

  
 
  

