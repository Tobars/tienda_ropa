import { Component } from '@angular/core';
import { NavBarComponent } from "../../shared/nav-bar/nav-bar.component";
import { CarouselComponent } from "../../shared/carousel/carousel.component";
import { ProductListComponent } from '../../shared/product-list/product-list.component';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavBarComponent, CarouselComponent, ProductListComponent, FooterComponent]
})
export class HomeComponent {





}
