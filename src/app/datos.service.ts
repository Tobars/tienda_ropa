import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './shared/models/product.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',  // Asegúrate de que esté aquí
})
export class DatosService {


  constructor(private httpClient: HttpClient, private router: Router) {}



  logout(){

    localStorage.removeItem('user');
    localStorage.removeItem('authToken');



  }



}
