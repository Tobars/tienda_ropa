import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../shared/footer/footer.component";
import { NavBarComponent } from "../../shared/nav-bar/nav-bar.component";

@Component({
    selector: 'app-error',
    standalone: true,
    templateUrl: './error.component.html',
    styleUrl: './error.component.css',
    imports: [RouterModule, FooterComponent, NavBarComponent]
})
export class ErrorComponent {

}


/*

En shared son archivos que se van a compartir, modales, servicios, componentes que se compartiran,






















 */
