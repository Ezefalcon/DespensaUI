import { Injectable } from '@angular/core';
import { AbstractCrudService } from "./abstract-crud.service";
import { Client } from "../shared/models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService extends AbstractCrudService<Client>{

  client: Client | undefined;
  url: string = '/cliente';

  getCurrentClient() {
    return this.client;
  }

  setCurrentClient(client: Client) {
    this.client = client;
  }
}
