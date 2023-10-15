import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css'],
})
export class FormSearchComponent {
  inputCep: string = '';

  handleSubmit(form: NgForm) {
    console.log(this.inputCep.replace(/-/g, ''));
  }
}
