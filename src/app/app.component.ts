import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form = new FormGroup({});

  fields: FormlyFieldConfig[] = [
    {
      key: 'Client_Number-rand',
      type: 'input',
      templateOptions: {
        label: 'Client_Number',
        placeholder: 'Formly is terrific!',
        required: true,
      },
    },
    {
      key: 'Client_Name-rand',
      type: 'input',
      templateOptions: {
        label: 'Client_Number',
        placeholder: 'Formly is terrific!',
        required: true,
      },
    }
  ];

  sampleModels = [
    {
      "text1": "1",
      "text2": "2"
    },
    {
      "text1": "3",
      "text2": "4"
    },
    // {
    //   "text1": "5",
    //   "text2": "6"
    // }
  ];

}
