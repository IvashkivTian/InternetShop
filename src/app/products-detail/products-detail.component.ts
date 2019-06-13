import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MainProgectService} from '../main-progect.service';
import { ActivatedRoute} from '@angular/router';
import { Product } from '../product';


@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {

  prod: Product;

  constructor(private service: MainProgectService, 
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getProduct();
  }

  goBack(): void {
    this.location.back();
  }
   
  getProduct(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getselectedProduct(id)
      .subscribe(prod => this.prod = prod);
  }

  add(prod){
    // console.log(prod)
    this.service.addToCart(prod);
  }
  }
  

