import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-panel',
  templateUrl: './inventory-panel.component.html',
  styleUrls: ['./inventory-panel.component.css']
})
export class InventoryPanelComponent implements OnInit {

  constructor() { }

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
  ];

  ngOnInit() {
  }

}
