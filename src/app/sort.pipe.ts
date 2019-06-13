import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  
  transform(products: Product[], sortPrice: any): Product[] {
    
    if(!sortPrice){
      return products;
    }else if(sortPrice == 'name'){
      return products.sort(function(a,b){
        if(a.name < b.name) {return -1;}
        if(a.name > b.name) {return 1;}
        else {return 0;}
      }) 
    }else if(sortPrice == 'priceMax'){
      return products.sort(function(a,b){
        return a.price - b.price
      })
    }else if(sortPrice == 'priceMin'){
      return products.sort(function(a,b){
        return b.price - a.price
      })
    
    
  }
  }

}

