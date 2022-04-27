import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `
  <div class="container jumbotron card" >
  <div class="row jumbotron card">
    <div class="col-sm-12 jumbotron card text-center">
      <h1 class="jumbotron card text-center" style="background-color: rgb(160, 162, 227);">LAPTOP SECTION</h1>
      <h6 class="text-center"><a class= " btn btn-primary btn-md" [routerLink]="['/cart']">Cart</a></h6>
      <hr />
    </div>
  </div>
   <!-- <app-products></app-products> -->
    <router-outlet></router-outlet>
  </div>
     
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
cart: any[] =[];

//cart: Observable<Array<any>> 
  constructor(private store: Store<any>) {}

  

  ngOnInit() {
    this.store.select('cart').subscribe((State => this.cart = State))  }
}
