import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationManageService {
  selectedMyTab: string = 'Home';
  constructor() { }

  selectedTabChanged(value:string){
    this.selectedMyTab = value;
  }
}
