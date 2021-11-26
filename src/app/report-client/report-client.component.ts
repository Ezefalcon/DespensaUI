import { Component, OnInit } from '@angular/core';
import { Client } from "../shared/models/client";
import { ProductClientService } from "../services/product-client.service";

export interface ClienteComprasReporte {
  cliente: Client;
  total: number;
}
@Component({
  selector: 'app-report-client',
  templateUrl: './report-client.component.html',
  styleUrls: ['./report-client.component.css']
})
export class ReportClientComponent implements OnInit {

  clientReport: ClienteComprasReporte[] = [];
  displayedColumns: string[] = ['cliente', 'total'];

  constructor(private productoClienteService: ProductClientService) { }

  ngOnInit(): void {
    this.productoClienteService.getClientsReport().subscribe(res => {
      console.log(res)
      this.clientReport = res;
    });
  }

}
