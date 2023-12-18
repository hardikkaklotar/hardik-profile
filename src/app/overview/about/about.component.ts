import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // @Input() test = '';
  
  // @Output() myoutput = new EventEmitter<string>();

  // myfun(){
  //   //for()
  //   //submit
  //   this.myoutput.emit('Thank you')
  // }
  // //this function is called only input value changed
  // ngOnChanges(changes: any) {
  //   if(changes.test){
  //     console.log("about-us - ngOnChanges :",changes.test.currentValue)
  //   }
  // }
}
