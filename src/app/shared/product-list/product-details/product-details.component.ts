import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../producto.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common'; // Importar CommonModule para utilizar directivas comunes como ngIf
import { RouterLink } from '@angular/router';
import { NavBarComponent } from "../../nav-bar/nav-bar.component";
import { FooterComponent } from "../../footer/footer.component"; // Para el uso de RouterLink en el template

@Component({
    selector: 'app-product-details',
    standalone: true, // Importar CommonModule para directivas como ngIf
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css'],
    imports: [CommonModule, RouterLink, NavBarComponent, FooterComponent]
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;  // El producto puede ser undefined mientras no se haya cargado

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
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
}
