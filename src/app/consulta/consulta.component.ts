import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit, OnDestroy {

  consultas;
  consultaInscricao;

  constructor(private consultaService:ConsultaService) { }

  ngOnInit() {
    this.consultaInscricao = this.consultaService.getConsultas()
    .subscribe( dados => this.consultas = dados );
  }

  ngOnDestroy() {
    this.consultaInscricao.unsubscribe();
  }

}
