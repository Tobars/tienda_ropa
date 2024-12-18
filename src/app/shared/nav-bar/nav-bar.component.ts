import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DatosService } from '../../datos.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  user: any = null;
  userImage: string = 'https://via.placeholder.com/50';
  userId: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private datosService: DatosService
  ) {}

  ngOnInit(): void {
    this.loadUserFromApi();
    this.loadUserFromLocalStorage();
  }

  private loadUserFromApi(): void {
    this.http.get<any>('https://fakestoreapi.com/users/1').subscribe({
      next: (response) => (this.user = response),
      error: (err) => console.error('Error al obtener el usuario:', err),
    });
  }

  private loadUserFromLocalStorage(): void {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser.id) {
      this.userId = storedUser.id;
      this.userImage = storedUser.image || this.userImage;
    }
  }

  logout(): void {
    this.datosService.logout();
    this.router.navigate(['/login']);
  }
}
