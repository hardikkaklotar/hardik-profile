import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-bennar',
  templateUrl: './bennar.component.html',
  styleUrls: ['./bennar.component.scss']
})
export class BennarComponent {
   constructor(private router: Router, public serviceService: ServiceService){}

  //item = 10;
  // clickandmove(){
  //   // this.router.navigateByUrl('/about');
  //   this.router.navigate(['/about']);
  // }
  //data = 10;

}
