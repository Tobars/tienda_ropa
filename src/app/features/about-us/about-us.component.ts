import { Component } from '@angular/core';
import { NavBarComponent } from "../../shared/nav-bar/nav-bar.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-about-us',
    standalone: true,
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.css',
    imports: [NavBarComponent, FooterComponent]
})
export class AboutUsComponent {

}
