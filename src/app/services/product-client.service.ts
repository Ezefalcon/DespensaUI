import { Injectable } from '@angular/core';
import { AbstractCrudService } from "./abstract-crud.service";
import { ProductClient } from "../shared/models/product-client";
import { ClienteComprasReporte } from "../report-client/report-client.component";
import { ProductoClienteReporte } from "../sales/sales.component";

@Injectable({
  providedIn: 'root'
})
export class ProductClientService extends AbstractCrudService<ProductClient> {
  url: string = "/producto/comprar";

  getClientsReport() {
    return this.httpClient.get<ClienteComprasReporte[]>(this.getUrl() + "/clienteMonto");
  }

  getProductosPorDia() {
    return this.httpClient.get<ProductoClienteReporte[]>(this.getUrl() + "/ventasPorDia");
  }
}
