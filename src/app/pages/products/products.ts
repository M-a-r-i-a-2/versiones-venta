import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart'; // Importa el servicio

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Productos {
  productos: Product[] = [];
  productoSeleccionado: Product | null = null;

  constructor(
    private product: Products,
    private cartService: CartService // Inyecta el servicio
  ) {
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

  // Nuevo método para añadir al carrito
  agregarAlCarrito(producto: Product) {
    this.cartService.addToCart(producto);
    this.cerrarModal();
  }
}