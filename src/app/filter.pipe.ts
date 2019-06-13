import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], term: string): Product[] {
    return !term
      ? products
      : products.filter(x => x.name.toLowerCase().includes(term.toLowerCase()))
  }

}
