import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,  // Hacemos el componente standalone
  imports: [CommonModule, RouterLink],  // Importamos CommonModule y RouterLink para el enrutamiento
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user: any = null; // Guardar los datos del usuario
  userImage: string = ''; // Guardar la imagen del usuario
  userId: string | null = null;  // Variable para almacenar el ID del usuario
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuario();
    this.obtenerUserId();
  }

  obtenerUsuario(): void {
    // Simulación de obtener el usuario con ID 1 de la API
    this.http.get<any>('https://fakestoreapi.com/users/1').subscribe(
      (response) => {
        this.user = response;
        // Usamos una imagen predeterminada para el usuario (ya que la API no proporciona una)
        this.userImage = 'https://via.placeholder.com/50'; // Puedes usar cualquier URL de imagen aquí
      },
      (error) => {
        console.error('Error al obtener los datos del usuario:', error);
      }
    );
  }

  logout(): void {
    console.log('Usuario ha cerrado sesión');
    this.router.navigate(['/login']);
  }

  obtenerUserId(): void {
    // Aquí obtenemos el userId del localStorage o de un servicio de autenticación
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userId = user.id;  // Asumimos que el objeto de usuario tiene un campo 'id'
    this.userImage = user.image || '';  // Si hay una imagen, la asignamos
  }
}
