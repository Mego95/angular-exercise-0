import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exercise-0';

  oddWords: string[] = [];
  evenWords: string[] = [];

  onWordSubmit(word: string) {
    if ((word.length % 2) === 0) {
      this.evenWords.push(word);
    } else {
      this.oddWords.push(word);
    }
  }
}
