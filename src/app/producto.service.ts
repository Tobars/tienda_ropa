import { Injectable } from '@angular/core';
import { Product } from './shared/models/product.model';
import { DatosService } from './datos.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  products: Product[] = [];

  apiUrl: string = 'https://fakestoreapi.com/products';
  constructor(
    private datosService: DatosService,
    private httpClient: HttpClient
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
}



/*
import { Injectable } from '@angular/core';
import { Product } from './shared/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
   Usamos un array para almacenar los productos
  products: Product[] = [];

  // La URL de la API
  apiUrl: string = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {}

  // Método para obtener los productos
  listarProductos(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  // Método para cargar los productos directamente en el componente (si prefieres usarlo sin Observable)
  cargarProductos(): void {
    this.httpClient.get<Product[]>(this.apiUrl).subscribe({
      next: (response) => {
        // Asignamos la respuesta a la propiedad products
        this.products = response;
        console.log(this.products); // Para depurar
      },
      error: (err) => {
        console.error('Error al obtener productos', err);
      },
    });
  }
}



*/
