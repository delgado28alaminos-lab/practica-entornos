import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-entorno',
  styleUrl: './entorno.css',
  templateUrl: './entorno.html',
})
export class Entorno {
  protected readonly titulo = 'Práctica Despliegues';
  protected readonly bienvenida =
    'Bienvenido/a a la aplicación de gestión de entornos con Git, GitHub y Vercel.';

  // Datos del entorno: cada rama (main, qa-pending, uat-pending) tiene su propia versión
  protected readonly siglas = 'PROD';
  protected readonly mensaje = 'Entorno de producción';
  protected readonly color = '#16a34a';
}
