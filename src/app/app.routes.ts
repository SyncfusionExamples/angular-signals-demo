import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CounterComponent } from './components/counter/counter.component';

export const routes: Routes = [
  // { path: '', component: CounterComponent },
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
];
