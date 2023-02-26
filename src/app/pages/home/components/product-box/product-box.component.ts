import { Component, Input ,OnInit,Output,EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl:'./product-box.component.html'
})
export class ProductBoxComponent implements OnInit{
  @Input() fullWidthMode = false;

  product: Product | undefined = {
    id:1,
    title:"Sneakers",
    price:2000,
    category : "shoes",
    description : "sddddddddddddddddd",
    image : "https://via.placeholder.com/150"
  };

  @Output() addToCart = new EventEmitter();

  ngOnInit(): void {
    
  }
  onAddToCart():void{
    this.addToCart.emit(this.product);
  }
}
