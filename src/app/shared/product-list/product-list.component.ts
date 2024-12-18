import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductoService } from '../../producto.service';
import { Product } from '../models/product.model';
import { CartService } from '../../cart.service';  // Importar el servicio

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, RouterModule]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productoService: ProductoService,
    private cartService: CartService  // Inyectar el servicio
  ) {}

  ngOnInit(): void {
    this.productoService.listarProductos().subscribe({
      next: (response) => {
        this.products = response;
      },
    });
  }

  agregarAlCarrito(product: Product): void {
    this.cartService.agregarAlCarrito(product);  // Llamar al servicio para agregar el producto
  }

  mostrarToast(mensaje: string): void {
    const toastContainer = document.querySelector('.toast-container');

    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.role = 'alert';9
    toast.ariaLive = 'assertive';
    toast.ariaAtomic = 'true';
    toast.innerHTML = `
      <div class="toast-body">
        ${mensaje}
      </div>
    `;

    toastContainer?.appendChild(toast);

    // Eliminar el toast después de 3 segundos
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
}
