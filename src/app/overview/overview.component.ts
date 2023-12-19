import { Component } from '@angular/core';
import { fromEvent, debounceTime, map, tap } from 'rxjs';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent {
  // test: string= "Hello"
  // finaloutput: string = ''
  // num:number = 10;
  // clickandmove(){
  //   this.num = this.num + 10;
  //   this.test = this.num.toString();
  // }
  // finaloutputFun(event:any){
  //   this.finaloutput = event;
  // }

/*
* CLICK BUTTON AND PAGE SCROLL ON TOP
*/ 
  showBtn$ = fromEvent(document, 'scroll').pipe(
    debounceTime(50),
    map(() => window.scrollY > 500),
  );
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
