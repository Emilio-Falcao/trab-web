import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/lista';
import { PlayLista } from 'src/app/mock-lista';
@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.css']
})
export class AjudaComponent implements OnInit {
  listaMusicas = PlayLista;

  listaClicada: Lista;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(lista: Lista): void {
    this.listaClicada = lista;
  }
}
