import { Component, OnInit } from '@angular/core';
import { MetasService } from 'src/service/metas.service';
import { MetaUsuarios } from '../models/metaUsuarios';

@Component({
  selector: 'app-metas-diarias',
  templateUrl: './metas-diarias.component.html',
  styleUrls: ['./metas-diarias.component.scss']
})
export class MetasDiariasComponent implements OnInit{

  metaUsuarios: MetaUsuarios[]  = []
  constructor(private metaService: MetasService) {

  }
  ngOnInit(): void {
    this.metaService.findAllMetasByUsuarioId().subscribe( data => {
      this.metaUsuarios = data
      this.metaUsuarios.forEach(m => {
        let metaEspecifica = this.metaService.findMetaByMetaId(m.metaId)
        metaEspecifica.subscribe(dataMeta => {
          m.descricaoMeta = dataMeta.descricao;
        })
      })
    });
  }

}
