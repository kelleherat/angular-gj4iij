import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {

  // @Input() formId: any;
  @Input() model: any;
  @Input() fields: any;
  public form = new FormGroup({});

  public modelsHolder: any;

  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };

  ngOnChanges(changes: SimpleChanges): void {

    console.warn(`change: ${this.model.text1} `);

    if (!this.modelsHolder) {
      console.log('models holder is empty');
      this.modelsHolder = [];
      this.sendToModelsHolder(this.model);
    } else {
      console.log('models holder exists');
      this.modelsHolder.forEach((model: any) => {

        /** already present? */
        if (!this.modelsHolder.includes(model, 0)) {
          this.sendToModelsHolder(model);
        } else {
          console.log('exists');
        }

      });
    }

  }

  private sendToModelsHolder(model: any) {
    console.log(model);
    const holder = ({
      id: this.model.text1,
      model: this.model
    });

    this.modelsHolder.push(holder);
    console.log(this.modelsHolder);
  }

  submit() {
    if (this.form.valid) {
      console.log(this.model);
    }
  }

}
