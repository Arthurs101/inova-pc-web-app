import { Component, Injectable, OnInit } from '@angular/core';
import { InnovaPCService } from 'src/app/services/innovapc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventory-panel',
  templateUrl: './inventory-panel.component.html',
  styleUrls: ['./inventory-panel.component.scss']
})

@Injectable({
  providedIn: 'root'
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

  viewMode=""
  viewName=""
  searchQuery=""
  isShowingFilters = false;
  filtered: any[];
  minIndex:number = 0
  maxIndex:number = 5
  currentPage: number = 1
  itemsPerPage: number = 5
  categories: any[];
  data:any[] = [];
  filters:{category: string, tipo: string,ubicacion: string, search:string}
  newProd: { name: string; category: string; precio: string; attributes: [{ key: string; value: string; }]; } | undefined



  constructor(private service: InnovaPCService) {
    this.filtered = this.products;
    this.categories = []
    this.data = this.products
    this.filters = {category:"0",tipo:"0",ubicacion:"0",search:""}
    this.viewMode = "new-product"
    this.viewName = "Nuevo producto"
  }

  async ngOnInit() {
    this.fetchData()
    this.data = this.filtered.slice(this.minIndex,this.maxIndex)
  }

  get totalPages(): number {
    try {
    return Math.ceil(this.filtered.length / this.itemsPerPage);
    }catch(error){
      return 0
    }
  }

   async fetchData(){
    var categories = await this.service.getProdCategories()
    if (categories.type == "error") {
      Swal.fire('No se pudo obtener las catagorías', String(categories.value) , 'error')
    }else{
      this.categories = categories.value
    }
    console.log(categories)
  }

  showFilters() {
    this.isShowingFilters  = ! this.isShowingFilters ;
  }

  setView (view: string , name: string) {
    this.viewMode = view
    this.viewName = name
  }

  onFilter(){
    this.filtered = this.products.filter((prod) => prod.categoria == this.filters.category || this.filters.category =="0")
    if (this.searchQuery != ""){
      let rgx_search = new RegExp(this.searchQuery.toLocaleUpperCase(), 'i')
      this.filtered =this.filtered.filter((prod) => rgx_search.test(prod.categoria.toLocaleUpperCase())
      || rgx_search.test(prod.nombre.toLocaleUpperCase())
      || rgx_search.test(prod.codigo.toLocaleUpperCase()))
    }
    this.data = this.filtered.slice(this.minIndex,this.maxIndex)
  }

  returnFirstPage() {
    this.currentPage = 1;
    this.maxIndex = Math.min(Number(this.itemsPerPage), this.filtered.length);
    this.minIndex = 0;
    this.data = this.filtered.slice(this.minIndex, this.maxIndex);
  }

  returnLastPage() {
    this.currentPage = this.totalPages;
    this.maxIndex = this.filtered.length;
    this.minIndex = Math.max(0, this.maxIndex - Number(this.itemsPerPage));
    this.data = this.filtered.slice(this.minIndex, this.maxIndex);
  }

  nextPage() {
    if (this.currentPage !== this.totalPages){
      this.currentPage += 1;
      this.minIndex += Number(this.itemsPerPage);
      this.maxIndex = Math.min(this.minIndex + Number(this.itemsPerPage), this.filtered.length);
      this.data = this.filtered.slice(this.minIndex, this.maxIndex);
    }
  }

  prevPage() {
    if (this.currentPage !== 1) {
      this.currentPage -= 1;
      this.maxIndex = this.minIndex;
      this.minIndex = Math.max(0, this.minIndex - Number(this.itemsPerPage));
      this.data = this.filtered.slice(this.minIndex, this.maxIndex);
    }
  }

  repaginate(){
    this.returnFirstPage();
  }
}
