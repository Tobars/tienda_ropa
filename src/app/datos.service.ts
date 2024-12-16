import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './shared/models/product.model';

@Injectable({
  providedIn: 'root',  // Asegúrate de que esté aquí
})
export class DatosService {

  url = 'https://t ienda-online-12ba6-default-rtdb.firebaseio.com/';

  constructor(private httpClient: HttpClient) {}

  listarProductos(): Observable<{[ llave: string]: Product }> {
    return this.httpClient.get<{ [llave: string]: Product }>(this.url + 'datos.json');
  }
}
