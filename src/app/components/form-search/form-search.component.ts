import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { DataCep } from 'src/app/model/data-cep';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css'],
})
export class FormSearchComponent {
  @Input() loading!: boolean;

  inputCep!: string;

  @Output() eventSeachCep = new EventEmitter<string>();

  handleSubmit(form: NgForm) {
    if (form.valid) {
      this.inputCep = this.inputCep.replace(/-/g, '');
      this.eventSeachCep.emit(this.inputCep);
    }
  }
}
