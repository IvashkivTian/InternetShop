import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { MainProgectService } from '../main-progect.service';
import { Observable, of } from 'rxjs';
import { FilterPipe } from '../filter.pipe';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: Product[];
  p:number = 1;
  
  constructor(private service: MainProgectService) {}


  ngOnInit() {
    this.products = this.service.get(); 
  }

}
