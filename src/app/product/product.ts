import { Component, inject, signal } from '@angular/core';

import { ProductCard } from '../product-card/product-card';


@Component({
  selector: 'app-product',
  imports: [ProductCard],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  data  = signal( [
    {
      id: 1,
      name: 'Wireless Mouse',
      category: 'Electronics',
      price: 799,
      stock: 45,
      brand: 'LogiTech',
    },
    {
      id: 2,
      name: 'Mechanical Keyboard',
      category: 'Electronics',
      price: 2499,
      stock: 20,
      brand: 'KeyPro',
    },
    {
      id: 3,
      name: 'Bluetooth Headphones',
      category: 'Audio',
      price: 1999,
      stock: 35,
      brand: 'SoundMax',
    },
    {
      id: 4,
      name: 'Smart Watch',
      category: 'Wearables',
      price: 3499,
      stock: 18,
      brand: 'FitTime',
    },
    {
      id: 5,
      name: 'USB-C Charger',
      category: 'Accessories',
      price: 599,
      stock: 60,
      brand: 'ChargeFast',
    },
    {
      id: 6,
      name: 'Laptop Stand',
      category: 'Office',
      price: 999,
      stock: 28,
      brand: 'DeskMate',
    },
    {
      id: 7,
      name: 'Gaming Monitor',
      category: 'Electronics',
      price: 12499,
      stock: 12,
      brand: 'ViewX',
    },
    {
      id: 8,
      name: 'Portable SSD 1TB',
      category: 'Storage',
      price: 5499,
      stock: 22,
      brand: 'DataSafe',
    },
    {
      id: 9,
      name: 'Webcam HD',
      category: 'Electronics',
      price: 1599,
      stock: 30,
      brand: 'CamVision',
    },
    {
      id: 10,
      name: 'Office Chair',
      category: 'Furniture',
      price: 6999,
      stock: 10,
      brand: 'ComfortSeat',
    },
  ]);

 
  

}
