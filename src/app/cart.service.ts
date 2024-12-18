import { Injectable } from '@angular/core';
import { Product } from './shared/models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // El carrito estará disponible como un BehaviorSubject para emitir cambios
  private carrito: { product: Product; quantity: number }[] = [];
  private carritoSubject = new BehaviorSubject(this.carrito);
  carrito$ = this.carritoSubject.asObservable();

  // Método para agregar productos al carrito
  agregarAlCarrito(product: Product): void {
    const itemExistente = this.carrito.find(item => item.product.id === product.id);

    if (itemExistente) {
      itemExistente.quantity += 1;
    } else {
      this.carrito.push({ product, quantity: 1 });
    }
    this.carritoSubject.next(this.carrito); // Emitir el nuevo estado del carrito
  }

  // Método para eliminar productos del carrito
  eliminarDelCarrito(productId: number): void {
    this.carrito = this.carrito.filter(item => item.product.id !== productId);
    this.carritoSubject.next(this.carrito); // Emitir el nuevo estado del carrito
  }

  // Método para actualizar la cantidad de un producto en el carrito
  actualizarCantidad(productId: number, cantidad: number): void {
    const item = this.carrito.find(item => item.product.id === productId);
    if (item) {
      item.quantity = cantidad;
      this.carritoSubject.next(this.carrito); // Emitir el nuevo estado del carrito
    }
  }

  // Método para obtener el total del carrito
  obtenerTotal(): number {
    return this.carrito.reduce((acc, item) => acc + parseFloat(item.product.price) * item.quantity, 0);
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
}
