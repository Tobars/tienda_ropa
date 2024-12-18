import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private readonly apiLoginUrl = 'https://fakestoreapi.com/auth/login';
  private readonly apiUsersUrl = 'https://fakestoreapi.com/users'; // URL para obtener todos los usuarios

  constructor(private router: Router, private http: HttpClient) {}

  login(Form: NgForm): void {
    const { username, password } = Form.value;

    // Hacemos la solicitud para autenticar al usuario
    this.http.post<any>(this.apiLoginUrl, { username, password }).subscribe({
      next: (response) => {
        if (response.token) {
          this.storeUserData(username, response.token);
          this.getUserId(username); // Buscar el ID del usuario basado en el username
          this.router.navigate(['/home']);
        }
      },
      error: (err) => console.error('Error al iniciar sesión:', err),
    });
  }

  private storeUserData(username: string, token: string): void {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify({ username, token }));
  }

  getUserId(username: string): void {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      this.http.get<any[]>(this.apiUsersUrl).subscribe({
        next: (users) => {
          const user = users.find((user) => user.username === username);

          if (user) {
            localStorage.setItem('userId', user.id.toString());
            console.log('ID del usuario logueado:', user.id);
          } else {
            console.error('Usuario no encontrado');
          }
        },
        error: (err) => console.error('Error al obtener la lista de usuarios:', err),
      });
    } else {
      console.error('Token de autenticación no encontrado');
    }
  }
}
