import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart.service';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../../../shared/nav-bar/nav-bar.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatosService } from '../../../datos.service';
import { ProductoService } from '../../../producto.service';
import { TruncatePipe } from '../../../shared/pipes/truncate.pipe';

@Component({
  selector: 'app-user-cart',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent, FormsModule, RouterModule],
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
  carrito: { product: Product; quantity: number }[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private productoService : ProductoService) {}

  ngOnInit(): void {
    this.cartService.carrito$.subscribe((carrito) => {
      this.carrito = carrito;
      this.actualizarTotal();  // Actualizar el total al iniciar
    });
  }

  eliminarDelCarrito(item: { product: Product; quantity: number }): void {
    this.cartService.eliminarDelCarrito(item.product.id);  // Eliminar el producto del carrito
  }

  actualizarCantidad(productId: number, cantidad: number): void {
    this.cartService.actualizarCantidad(productId, cantidad);  // Actualizar la cantidad del producto
    this.actualizarTotal();  // Actualizar el total después de modificar la cantidad
  }

  actualizarTotal(): void {
    this.total = this.cartService.obtenerTotal();
    this.total = parseFloat(this.total.toFixed(2));  // Redondear a dos decimales
  }

  goBack( ): void{
    this.productoService.goBack();


  }
}
