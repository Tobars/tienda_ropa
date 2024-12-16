import { Component } from '@angular/core';
import { NavBarComponent } from "../shared/nav-bar/nav-bar.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
    selector: 'app-contac-us',
    standalone: true,
    templateUrl: './contac-us.component.html',
    styleUrl: './contac-us.component.css',
    imports: [NavBarComponent, FooterComponent]
})
export class ContacUsComponent {

}
