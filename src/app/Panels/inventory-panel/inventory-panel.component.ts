import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-panel',
  templateUrl: './inventory-panel.component.html',
  styleUrls: ['./inventory-panel.component.css']
})
export class InventoryPanelComponent implements OnInit {
  products: any[] = [
    {
      codigo: "001",
      nombre: "Product 1",
      categoria: "Category A",
      tipo: "Type X",
      ubicacion: "Location 1",
      disponibles: 10,
    },
    {
      codigo: "002",
      nombre: "Product 2",
      categoria: "Category B",
      tipo: "Type Y",
      ubicacion: "Location 2",
      disponibles: 20,
    },
    // Add more objects as needed
    {
      codigo: "002",
      nombre: "Product 2",
      categoria: "Category B",
      tipo: "Type Y",
      ubicacion: "Location 2",
      disponibles: 20,
    },
    {
      codigo: "002",
      nombre: "Product 2",
      categoria: "Category B",
      tipo: "Type Y",
      ubicacion: "Location 2",
      disponibles: 20,
    },
    {
      codigo: "002",
      nombre: "Product 2",
      categoria: "Category B",
      tipo: "Type Y",
      ubicacion: "Location 2",
      disponibles: 20,
    },
    {
      codigo: "002",
      nombre: "Product 2",
      categoria: "Category B",
      tipo: "Type Y",
      ubicacion: "Location 2",
      disponibles: 20,
    },
    {
      codigo: "002",
      nombre: "Product 2",
      categoria: "Category B",
      tipo: "Type Y",
      ubicacion: "Location 2",
      disponibles: 20,
    },
    {
      codigo: "002",
      nombre: "Product 2",
      categoria: "Category B",
      tipo: "Type Y",
      ubicacion: "Location 2",
      disponibles: 20,
    },
    {
      codigo: "002",
      nombre: "Product 2",
      categoria: "Category B",
      tipo: "Type Y",
      ubicacion: "Location 2",
      disponibles: 20,
    },
    {
      codigo: "002",
      nombre: "Product 2",
      categoria: "Category B",
      tipo: "Type Y",
      ubicacion: "Location 2",
      disponibles: 20,
    },
  ];
  filtered: any[];
  minIndex:number = 0
  maxIndex:number = 5
  currentPage: number = 1
  itemsPerPage: number = 5
  categories: any[];
  data:any[] = [];
  filters:{category: string, tipo: string,ubicacion: string, search:string}
  constructor() {
    this.filtered = this.products;
    this.categories = []
    this.data = this.products
    this.filters = {category:"0",tipo:"0",ubicacion:"0",search:""}
  }


  ngOnInit() {
    this.products.forEach((prod) =>{
      if (!this.categories.includes(prod.categoria)){
        this.categories.push(prod.categoria)
      }
    })
  }

  get totalPages(): number {
    try {
    return Math.ceil(this.filtered.length / this.itemsPerPage);
    }catch(error){
      return 0
    }
  }

  onFilter(){
    this.filtered = this.products.filter((prod) => prod.categoria == this.filters.category || this.filters.category =="0")
    this.data = this.filtered.slice(this.minIndex,this.maxIndex)
  }

  returnFirstPage() {
    this.currentPage = 1
    this.maxIndex = this.itemsPerPage;
    this.minIndex = 0;
    this.data = this.filtered.slice(this.minIndex, this.maxIndex)
  }
  returnLastPage() {
    this.currentPage = this.totalPages
    this.maxIndex = this.products.length;
    this.minIndex = this.products.length-this.itemsPerPage;
    this.data = this.filtered.slice(this.minIndex, this.maxIndex)
  }
  nextPage() {
    if (this.currentPage !== this.totalPages){
      this.currentPage +=1
      this.maxIndex+=this.itemsPerPage
      this.minIndex+=this.itemsPerPage
      this.data = this.filtered.slice(this.minIndex, this.maxIndex)
    }
  }
  prevPage() {
    if (this.currentPage !== 1) {
      this.currentPage -=1
      this.maxIndex-=this.itemsPerPage
      this.minIndex-=this.itemsPerPage
      this.data = this.filtered.slice(this.minIndex, this.maxIndex)
    }
  }
  repaginate(){
    console.log(this.itemsPerPage)
    this.returnFirstPage()
  }

}
