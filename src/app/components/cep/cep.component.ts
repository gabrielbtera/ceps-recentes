import { Observable } from 'rxjs';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { DataCep } from 'src/app/model/data-cep';
import { OrderList } from 'primeng/orderlist';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css'],
})
export class CepComponent {
  @Input() dataCeps: DataCep[] = [];

  @ViewChild(OrderList) orderList!: OrderList;

  @Input() datasCeps$: Observable<DataCep[]> = new Observable<DataCep[]>();

  getValue(data: string) {
    return data ? data : 'Não encontrado';
  }

  setCd() {
    this.orderList?.cd.detectChanges();
  }
}
