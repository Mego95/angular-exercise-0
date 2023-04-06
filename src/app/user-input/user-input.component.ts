import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  @Output() wordSubmit = new EventEmitter<string>();
  
  onWordSubmit(inputWord: string) {
    this.wordSubmit.emit(inputWord);
  }
}
