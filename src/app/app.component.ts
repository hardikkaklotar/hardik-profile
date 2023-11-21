import { Component } from '@angular/core';
import { NavigationManageService } from './service/navigation-manage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hardik-resume';
  constructor(public navigationManageService: NavigationManageService) { }
}
