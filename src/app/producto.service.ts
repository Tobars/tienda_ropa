import { Injectable } from '@angular/core';
import { Product } from './shared/models/product.model';
import { DatosService } from './datos.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  products: Product[] = [];

  apiUrl: string = 'https://fakestoreapi.com/products';
  constructor(
    private datosService: DatosService,
    private httpClient: HttpClient,
    private location : Location,
  ) {}

  listarProductos() {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  cargarProductos(): void {
    this.httpClient.get<Product[]>(this.apiUrl).subscribe({
      next: (Response) => {
        this.products = Response;

        console.log(this.products);
      },
    });
  }



  // Método para obtener un producto por su ID
  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }

  mostrarToast(mensaje: string): void {
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.innerText = mensaje;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  goBack(): void {
    this.location.back();  // Navegar a la página anterior
  }


}



