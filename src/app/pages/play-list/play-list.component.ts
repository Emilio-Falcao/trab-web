import { getLocaleNumberSymbol, getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/lista';
import { PlayLista } from 'src/app/mock-lista';



@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  listaMusicas = PlayLista;

  listaClicada:Lista;

  constructor() { }

  ngOnInit(): void {
  }
onSelect(lista:Lista):void{
  this.listaClicada = lista;
}
}
