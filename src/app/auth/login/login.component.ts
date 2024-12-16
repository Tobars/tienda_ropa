import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private apiLoginUrl = 'https://fakestoreapi.com/auth/login';

  constructor(private router: Router, private httpClient: HttpClient) {}

  loginToken(Form: NgForm) {
    const { username, password } = Form.value;

    const loginData = {
      username: username,
      password: password,
      userId: ""
    };

    this.httpClient
      .post<any>(this.apiLoginUrl, loginData)
      .subscribe((response) => {
        console.log('Respuesta de la API', response);

        if (response.token) {
          localStorage.setItem('authToken', response.token);

          localStorage.setItem(
            'user',
            JSON.stringify({
              username: username,
              token: response.token,
            })
          );
          this.router.navigate(['/home'])
        }
      });
  }
}
