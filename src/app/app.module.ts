import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ResumoComponent } from './resumo/resumo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { AppRoutingModule } from './app-routing.module';
import { ResumoService } from './resumo/resumo.service';
import { ConsultaService } from './consulta/consulta.service';
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { FaturamentoService } from './faturamento/faturamento.service';


@NgModule({
  declarations: [
    AppComponent,
    PainelSimplesComponent,
    BarraNavegacaoComponent,
    ResumoComponent,
    ConsultaComponent,
    FaturamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ResumoService, ConsultaService, FaturamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
