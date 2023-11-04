import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { OrderList } from 'primeng/orderlist';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataCep } from 'src/app/model/data-cep';
import { CepService } from 'src/app/services/cep.service';
import { CepComponent } from '../cep/cep.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  infosCeps: DataCep[] = [];

  @ViewChild(CepComponent) childComponent!: CepComponent;

  private datasCeps = new BehaviorSubject<DataCep[]>([]);
  datasCeps$: Observable<DataCep[]> = new Observable<DataCep[]>();

  loading = false;

  constructor(private cepService: CepService) {
    this.datasCeps$ = this.datasCeps.asObservable();
  }

  getCep(cep: string) {
    this.loading = true;
    this.cepService.getCep(cep).subscribe((infos) => {
      this.infosCeps.unshift(infos);
      this.datasCeps.next(this.infosCeps);

      this.childComponent.setCd(); // este cd foi necessário pois o order list não está reativo

      this.loading = false;
    });
  }
}
