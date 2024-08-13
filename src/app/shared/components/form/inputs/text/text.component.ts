import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InputAttrModel} from "../../../../../core/models/Form/Input/InputAttrModel";

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  @Input() inputAttr!: InputAttrModel;
  @Input() form!:FormGroup;
}
