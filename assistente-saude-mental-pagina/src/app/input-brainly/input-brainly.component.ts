import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-brainly',
  templateUrl: './input-brainly.component.html',
  styleUrls: ['./input-brainly.component.scss']
})
export class InputBrainlyComponent {
  
  @Input() inputText!: string;

  @Input() placeholder!: string

  @Input() inputTypes!: string

  @Output() outputText = new EventEmitter<string>();

  emitirEvento(): void{
    this.outputText.emit(this.inputText);
    this.inputText = '';
  }
}
