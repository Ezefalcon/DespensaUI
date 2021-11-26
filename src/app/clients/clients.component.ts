import { Component, OnInit } from '@angular/core';
import { ClientService } from "../services/client.service";
import { Client } from "../shared/models/client";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];
  displayedColumns: string[] = ['id', 'nombre'];

  constructor(private clienteService: ClientService) { }

  ngOnInit(): void {
    this.clienteService.findAll().subscribe(res => {
      this.clients = res as Client[];
      console.log(this.clients)
    });
  }

}
