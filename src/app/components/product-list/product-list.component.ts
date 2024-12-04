import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../../services/product.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CartComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  private readonly productService = inject(ProductService);
  protected productList = this.productService.productList;

  addItemToCart(id: number) {
    const selectedItem = this.productList()?.products.find(
      (product) => product.id === id
    );

    this.productService.cartItemsList.update((cartItems) => {
      if (selectedItem) cartItems?.push(selectedItem);
      return cartItems;
    });
  }
}
