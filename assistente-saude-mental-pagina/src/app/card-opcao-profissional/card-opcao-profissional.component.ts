import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-opcao-profissional',
  templateUrl: './card-opcao-profissional.component.html',
  styleUrls: ['./card-opcao-profissional.component.scss']
})
export class CardOpcaoProfissionalComponent {

  @Input()
  profissional!: string

  @Input()
  especialidade!: string;

  @Input()
  atendimento !: string

}
