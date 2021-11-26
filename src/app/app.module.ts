import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { NavbarComponent } from './navbar/navbar.component';
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { CreateClientComponent } from './create-client/create-client.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductsComponent } from './products/products.component';
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDividerModule } from "@angular/material/divider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import { ReportClientComponent } from './report-client/report-client.component';
import { SalesComponent } from './sales/sales.component';
import { MatTableModule } from "@angular/material/table";
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateClientComponent,
    ProductsComponent,
    HomeComponent,
    ReportClientComponent,
    SalesComponent,
    ClientsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
