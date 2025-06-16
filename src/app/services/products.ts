import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  nombre:string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[] = [
    {
      id: 1,
      nombre: 'Gigabyte GeForce RTX 4060 OC 8 GB',
      descripcion : 'Ideal para gaming en 1080p e incluso 1440p a buen presupuesto.',
      precio: 8829 ,
      imagen: '/img/4060.jpg'
    },
    {
      id: 2,
      nombre: 'Gigabyte GeForce RTX 4070 Windforce OC 12 GB',
      descripcion: 'Equilibrio excelente para juegos en 1440p con trazado y DLSS.',
      precio: 17990,
      imagen: '/img/4070.jpg'
    },
    {
      id: 3,
      nombre: 'Asus ProArt GeForce RTX 4070 Ti 16 GB',
      descripcion: 'Para usuarios que requieren rendimiento top en 4K o tareas creativas.',
      precio: 23199,
      imagen: '/img/4070ti.jpg'
    },
   {
      id: 4,
      nombre: 'NVIDIA Founders RTX 4080 16 GB',
      descripcion: 'Rendimiento premium 4K, con 16 GB y gran capacidad para IA y edición.',
      precio: 41180,
      imagen: '/img/4080.png'
   },
   {
      id: 5,
      nombre: 'NVIDIA Founders RTX 4090 24 GB ',
      descripcion: 'La mejor opción del mercado: rendimiento extremo en 4K y cargas de trabajo de IA.',
      precio: 60360,
      imagen: '/img/4090.jpg'
    }
  ]
  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
}
