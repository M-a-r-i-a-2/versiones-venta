import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
import { CommonModule } from '@angular/common'; // <- necesario para *ngIf y *ngFor

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule], // <- aquí lo agregas
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})

export class Productos {
  productos: Product[] = [];
  productoSeleccionado: Product | null = null; // <- Estado del modal

  constructor(private product: Products) {
    this.productos = this.product.getProducts();
  }

  seleccionarProducto(producto: Product) {
    this.productoSeleccionado = producto;
  }

  cerrarModal() {
    this.productoSeleccionado = null;
  }
  trackProducto(index: number, producto: Product): number {
  return producto.id;
}

}


