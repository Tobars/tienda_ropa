import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../producto.service';
import { Product } from '../models/product.model';
import { FooterComponent } from "../footer/footer.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    imports: [CommonModule, RouterLink, FooterComponent, NavBarComponent]
})
export class ProductListComponent implements OnInit {
agregarAlCarrito(_t5: Product) {
throw new Error('Method not implemented.');
}

  products: Product[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    // Usa el servicio para obtener los productos
    this.productoService.listarProductos().subscribe({
      next: (response) => {
        this.products = response;
      },

    });



  }

  cargarProductos(){

    this.cargarProductos();

  }
}
