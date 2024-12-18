import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductoService } from '../../../producto.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common'; // Importar CommonModule para usar ngIf
import { NavBarComponent } from "../../nav-bar/nav-bar.component";
import { FooterComponent } from "../../footer/footer.component"; // Para el uso de RouterLink en el template
import { CartService } from '../../../cart.service';  // Asegúrate de que el servicio CartService esté disponible
import { Location } from '@angular/common';  // Importar Location para poder navegar hacia atrás

@Component({
    selector: 'app-product-details',
    standalone: true,
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css'],
    imports: [CommonModule, NavBarComponent, FooterComponent, RouterModule]
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;  // El producto puede ser undefined mientras no se haya cargado

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private cartService: CartService,  // Inyectamos el servicio del carrito
    private location: Location  // Inyectamos el servicio Location
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productoService.getProductById(Number(productId)).subscribe({
        next: (product) => {
          this.product = product;
        },
        error: (err) => {
          console.error('Error al cargar el producto', err);
        }
      });
    }
  }

  // Método para agregar un producto al carrito
  agregarAlCarrito(product: Product): void {
    this.cartService.agregarAlCarrito(product); // Asegúrate de pasar un Product aquí
    this.mostrarToast(product.title + ' agregado con éxito!'); // Pasa un string aquí, lo cual está bien
  }

  // Método para mostrar el toast (notificación)
  mostrarToast(mensaje: string): void {
    const toastContainer = document.querySelector('.toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.role = 'alert';
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

  // Método para volver atrás
  goBack(): void {
    this.location.back();  // Navegar a la página anterior
  }
}
