import { Component, OnInit } from '@angular/core';
import { ProductClientService } from "../services/product-client.service";
import { Product } from "../shared/models/product";

export interface ProductoClienteReporte {
  date: string;
  productos: Product[];
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  productosPorDia: ProductoClienteReporte[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'precio'];

  constructor(private productoClienteService: ProductClientService) { }

  ngOnInit(): void {
    this.productoClienteService.getProductosPorDia().subscribe(res => {
      this.productosPorDia = res as ProductoClienteReporte[];
    });
  }

}
