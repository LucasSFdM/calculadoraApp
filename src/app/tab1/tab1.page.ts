import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public n1: number;

  public n2: number;

  public resultado: number;

  constructor() {
  
  }

  public resultadosoma(){
    this.resultado = this.n1 + this.n2;
  }

  public resultadosub(){
    this.resultado = this.n1 - this.n2;
  }

  public resultadodiv(){
    this.resultado = this.n1 / this.n2;
  }

  public resultadomult(){
    this.resultado = this.n1 * this.n2;
  }

  public limpar(){
    this.n1 = null;
    this.n2 = null;
    this.resultado = null;
  }
}
