import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataCep } from 'src/app/model/data-cep';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css'],
})
export class CepComponent {
  @Input() dataCeps: DataCep[] = [];

  @Output() selection = new EventEmitter<DataCep[]>();

  getValue(data: string) {
    return data ? data : 'Não encontrado';
  }

  notificarSelecao(dados: DataCep[]) {
    this.selection.emit(dados);
  }
}
