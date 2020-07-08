import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // Variáveis
  public calculo = ''; 
  public resultado: string;
  private ponto = false;
  private operacoes = ['+', '-', '*', '/'];

  constructor(public alertController: AlertController) { }

  //  Método para adiocionar um número
  public adicionarNumero(valor: string) {
    if (this.resultado) {
      this.limpar();
    }
    this.calculo = this.calculo + valor;
  }

  //  Método para adiocionar um ponto
  public adicionarPonto() {
    if (this.ponto) {
      return;
    }
    this.calculo += ".";
    this.ponto = true;
  }

  //  Método para adiocionar uma operação
  public adicionarOperacao(operador: string) {
    if (this.resultado) {
      this.calculo = this.resultado.toString();
      this.resultado = null;
    }
    const ultimo = this.calculo.slice(-1);
    if (this.operacoes.indexOf(ultimo) > -1) {
      return;
    }
    this.calculo += operador;
    this.ponto = false;
  }

  //  Método para limpar a tela
  public limpar() {
    this.resultado = null;
    this.calculo = '';
    this.ponto = false;
  }

  //  Método para calcular a conta 
  public calcularResultado() {
    try {
      this.resultado = evaluate(this.calculo);
    } 
    // CASO DE ALGUM ERRO INESPERADO O CATCH NÃO PERMITE QUE O APP BUGA E O USUÁRIO SEJA PREJUDICADO
    catch (e) {
      this.resultado = '';
      this.presentAlert('ERRO!!!', 'Cálculo inváldo, verifique!');
    }
  }

  async presentAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

  //  Método para apagar o último dígito da operação
  public apagarUltimo() {
    const ultimo = this.calculo.slice(-1);
    if (ultimo == ".") {
      this.ponto = false;
    }
    this.calculo = this.calculo.slice(0, -1);
  }

}
