import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaOrdersComponent } from './components/pizza-orders/pizza-orders.component'

const routes: Routes = [
  {path:'orders', component:PizzaOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
