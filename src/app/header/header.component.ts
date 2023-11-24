import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationManageService } from '../service/navigation-manage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(public navigationManageService: NavigationManageService) { }

    navigationItems = [
        { label: 'Home', route: '#header' },
        { label: 'About', route: '#about' },
        { label: 'Resume', route: '#resume' },
        { label: 'Services', route: '#services' },
        { label: 'Contact', route: '#contact' }
    ];
}

