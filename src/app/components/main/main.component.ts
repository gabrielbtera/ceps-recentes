import { Component } from '@angular/core';
import { DataCep } from 'src/app/model/data-cep';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  cep: string = '';
  infoCep!: DataCep;

  loading = false;

  constructor(private cepService: CepService) {}

  getCep(cep: string) {
    this.loading = true;
    this.cepService.getCep(cep).subscribe((infos) => {
      this.infoCep = infos;
      this.loading = false;
    });
  }
}
