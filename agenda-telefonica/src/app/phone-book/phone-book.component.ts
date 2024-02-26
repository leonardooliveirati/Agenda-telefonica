
import { Component } from '@angular/core';

@Component({
  selector: 'app-telefone',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class TelefoneComponent {
  nome: string = 'Codificador';
  sobrenome: string = 'Byte';
  telefone: string = '8885559999';
  contatos: { nome: string, sobrenome: string, telefone: string }[] = [];

  adicionarContato() {
    this.contatos.push({
      nome: this.nome,
      sobrenome: this.sobrenome,
      telefone: this.telefone
    });
    this.nome = '';
    this.sobrenome = '';
    this.telefone = '';
  }
}
