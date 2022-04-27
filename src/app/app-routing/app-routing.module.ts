import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { CartComponent } from '../cart/cart.component';
import { ProductsComponent } from '../products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { reducer } from '../store/reducer';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/products',
      pathMatch: 'full'
  },
  {
      path: 'products',
      component: ProductsComponent
  },
  {
      path: 'cart',
      component: CartComponent
  },
  {
      path: 'product/:id',
      component: ProductComponent
  },
  {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forRoot({cart: reducer}),
    CommonModule
  ]
})
export class AppRoutingModule { }
