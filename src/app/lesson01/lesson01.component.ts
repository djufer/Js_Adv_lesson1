import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson01',
  templateUrl: './lesson01.component.html',
  styleUrls: ['./lesson01.component.scss'],
})
export class Lesson01Component {
  //  стрічка нецензурних слів, розділена комами
  public badWords = '';
  // масив нецензурних слів
  public badWordsArray!: Array<string>;
  // введене ОДНЕ нецензурне слово яке додається
  public badWord = '';
  // стрічка textArea, яку ми хочемо перевіряти на наявність нецензурних слів
  public textAreaContent = '';

  add() {
    if (!this.badWords) {
      this.badWords += this.badWord;
      console.log('here');
    } else {
      this.badWords += ', ' + this.badWord;
    }
    this.badWord = '';
  }
  reset() {
    this.badWords = '';
    this.textAreaContent = '';
  }
  cenzor(): void {
    if (!this.textAreaContent) {
      console.log('textArea is empty');
    } else {
      if (!this.badWords) {
        console.log('Ви не ввели жодного слова');
      } else {
        // this.textAreaContentArray = this.textAreaContent.split(' ');
        this.badWordsArray = this.badWords.split(', ');
        for (let i = 0; i < this.badWordsArray.length; i++) {
          let regex = new RegExp(`\\b${this.badWordsArray[i]}\\b`, 'gi');
          this.textAreaContent = this.textAreaContent.replace(
            regex,
            '*'.repeat(this.badWordsArray[i].length)
          );
        }
      }
    }
  }
}
