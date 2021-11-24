import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractCrudService<T> {

  abstract url: string;

  protected constructor(protected httpClient: HttpClient) {
  }

  save(t: T): Observable<T> {
    return this.httpClient.post<T>(this.getUrl(), t);
  }

  findAll<T>(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.getUrl());
  }

  deleteById(id: any) {
    return this.httpClient.delete(this.getUrl() + "/" + id)
  }

  update(id: any, t: T) {
    return this.httpClient.put(this.getUrl() + "/" + id, t);
  }

  getUrl(): string {
    return environment.apiUrl + this.url;
  }
}
