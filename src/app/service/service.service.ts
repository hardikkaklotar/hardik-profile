import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  item = 10;
  constructor() { }

  clickandmove() {
    this.item = Math.floor(Math.random() * 10);
  }
}
