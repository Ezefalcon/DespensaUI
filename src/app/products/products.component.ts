import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import { Product } from "../shared/models/product";
import { ProductClientService } from "../services/product-client.service";
import { ClientService } from "../services/client.service";
import { ProductClient } from "../shared/models/product-client";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarService } from "../services/snackbar.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService,
              private clientService: ClientService,
              private snackBarService: SnackbarService,
              private productClientService: ProductClientService) { }

  ngOnInit(): void {
    this.productService.findAll().subscribe(res => {
      this.products = res as Product[];
    });
  }

  addProduct(product: Product) {
    const client = this.clientService.getCurrentClient();
    if(client) {
      const productClient: ProductClient = {
        clienteId: client.id,
        productoId: product.id,
        cantidad: 1
      }
      this.productClientService.save(productClient).subscribe(res => {
        this.snackBarService.openSnackBar(`Se agrego el producto con id ${product.id}`, 'OK');
      }, error => {
        this.snackBarService.openSnackBar(error.error.text, 'OK')
        console.log(error)
      });

    } else {
      this.snackBarService.openSnackBar('La compra deberia estar asociada a un cliente', 'OK');
    }
  }
}
