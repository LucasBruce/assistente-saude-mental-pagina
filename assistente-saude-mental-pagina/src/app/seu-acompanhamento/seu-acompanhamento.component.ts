import { Component } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-seu-acompanhamento',
  templateUrl: './seu-acompanhamento.component.html',
  styleUrls: ['./seu-acompanhamento.component.scss']
})
export class SeuAcompanhamentoComponent {
  dados: any;
  constructor(private backend: BackendService) { }
  ngOnInit() {
    this.backend.fazerRequisicao('profissionais').subscribe(
      dados => {
        this.dados = dados;
      },
      erro => {
        console.error(erro);
      }
    );
  }
}
