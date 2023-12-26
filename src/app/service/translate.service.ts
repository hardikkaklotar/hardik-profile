import { Injectable } from '@angular/core';
import * as enContent from '../../assets/content/en.json';
import * as spaContent from '../../assets/content/spanish.json';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  content = enContent;
  currentLanguage: string = 'english'
  constructor() {

  }

  setLanguage(language: string) {
    this.currentLanguage = language;
    this.content = this.currentLanguage === 'english' ? enContent : spaContent;
  }
}
