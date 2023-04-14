import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-brainly',
  templateUrl: './button-brainly.component.html',
  styleUrls: ['./button-brainly.component.scss']
})
export class ButtonBrainlyComponent {

  @Input()
  buttonDescription !: string

  @Input()
  buttonTypes !: string

}
