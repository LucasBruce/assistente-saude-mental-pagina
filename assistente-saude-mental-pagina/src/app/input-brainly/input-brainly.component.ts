import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-brainly',
  templateUrl: './input-brainly.component.html',
  styleUrls: ['./input-brainly.component.scss']
})
export class InputBrainlyComponent {

  @Input()
  placeholder !: string

  @Input()
  inputTypes !: string

}
