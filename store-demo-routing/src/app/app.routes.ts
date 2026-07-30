import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products | Angular Store',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart | Angular Store',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About | Angular Store',
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];