import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ShoppingCart } from '../../models/shopping-cart';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatTableModule, AsyncPipe, CurrencyPipe, MatCardModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private readonly productService = inject(ProductService);
  displayedColumns: string[] = ['name', 'quantity', 'price'];

  protected finalCartItems = computed(() => {
    const shoppingCart: ShoppingCart[] = [];
    this.productService.cartItemsList().map((item) => {
      const index = shoppingCart.findIndex(
        (finalCart) => item.id === finalCart.product.id
      );
      if (index > -1) {
        shoppingCart[index].quantity += 1;
      } else {
        shoppingCart.push({ product: item, quantity: 1 });
      }
    });
    return shoppingCart;
  });

  protected totalCost = computed(() => {
    return this.finalCartItems().reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
  });
}
