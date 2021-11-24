import { Injectable } from '@angular/core';
import { AbstractCrudService } from "./abstract-crud.service";
import { Client } from "../shared/models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService extends AbstractCrudService<Client>{

  url: string = '/cliente';

}
