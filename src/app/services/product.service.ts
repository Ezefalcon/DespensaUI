import { Injectable } from '@angular/core';
import { AbstractCrudService } from "./abstract-crud.service";
import { Product } from "../shared/models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends AbstractCrudService<Product>{
  url: string = "/producto";

}
