import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

interface Product {
  id_producto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  fecha_agregado: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}

