import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] =[
    {id: 1, name: "Meditações", price: 23.0, description: "Meditações", image:"../medita.jpg"},
    {id: 2, name: "Irmãos karamazov", price: 33.0, description: "Irmaos", image:"../irmao.jpg"},
    {id: 3, name: "Memórias do Subsolo", price: 6.0, description: "Sub", image:"../doto.webp"},
    {id: 4, name: "Meditações", price: 23.0, description: "Meditações", image:"../medita.jpg"},
    {id: 5, name: "Memórias do Subsolo", price: 6.0, description: "Sub", image:"../doto.webp"},
    {id: 6, name: "Irmãos karamazov", price: 33.0, description: "Irmaos", image:"../irmao.jpg"},
    {id: 7, name: "Memórias do Subsolo", price: 6.0, description: "Sub", image:"../doto.webp"},
    {id: 8, name: "Meditações", price: 23.0, description: "Meditações", image:"../medita.jpg"},
    {id: 9, name: "Irmãos karamazov", price: 33.0, description: "Irmaos", image:"../irmao.jpg"},
    {id: 10, name: "Memórias do Subsolo", price: 6.0, description: "Sub", image:"../doto.webp"},
  ];
  
  getProducts(): Iproducts[]{
    return this.products;
  }

}
  

