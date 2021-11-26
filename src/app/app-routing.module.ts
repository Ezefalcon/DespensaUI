import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ReportClientComponent } from "./report-client/report-client.component";
import { SalesComponent } from "./sales/sales.component";
import { ClientsComponent } from "./clients/clients.component";

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'report/client', component: ReportClientComponent },
  { path: 'report/sales', component: SalesComponent },
  { path: 'clients', component: ClientsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
