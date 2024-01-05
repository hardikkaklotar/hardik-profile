import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { fromEvent, debounceTime, map } from 'rxjs';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [MessageService]
})

export class OverviewComponent implements OnInit {

  @ViewChild('myModal')
  myModal!: ElementRef;

  leftTooltipItems!: MenuItem[];

  constructor(private messageService: MessageService, private el: ElementRef, private renderer: Renderer2) { }

  closeResumeModal() {
    // close the Bootstrap modal and remove the overlay
    const modalElement = this.el.nativeElement.querySelector('#exampleModal');
    // Hide the modal
    this.renderer.removeClass(modalElement, 'show');
    this.renderer.addClass(modalElement, 'fade');
    // Remove the modal backdrop
    const backdropElement = document.querySelector('.modal-backdrop');
    if (backdropElement) {
      this.renderer.removeChild(document.body, backdropElement);
    }
  }
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

  openModal() {
    alert('working')
  }

  ngOnInit() {
    this.leftTooltipItems = [

      {
        tooltipOptions: {
          tooltipLabel: 'Call',
          tooltipPosition: 'left'
        },
        icon: 'fa-solid fa-phone-volume',
        // command: () => {
        //     this.messageService.add({ severity: 'success', summary: 'Twitter', detail: 'Twitter' });
        // }
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Facebook',
          tooltipPosition: 'left'
        },
        icon: 'fa-brands fa-facebook-f',
        // url: 'http://angular.io'
      },
      {
        tooltipOptions: {
          tooltipLabel: 'linkedin',
          tooltipPosition: 'left'
        },
        icon: 'fa-brands fa-linkedin-in',
        // command: () => {
        //     this.messageService.add({ severity: 'info', summary: 'linkedin', detail: 'linkedin' });
        // }
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Instagram',
          tooltipPosition: 'left'
        },
        icon: 'fa-brands fa-instagram',
        // command: () => {
        //     this.messageService.add({ severity: 'error', summary: 'Instagram', detail: 'Instagram' });
        // }
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Skype',
          tooltipPosition: 'left'
        },
        icon: 'fa-brands fa-skype',
        // url: 'http://angular.io'
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Whatsapp',
          tooltipPosition: 'left'
        },
        icon: 'fa-brands fa-whatsapp',
        // url: 'http://angular.io'
      },
      {
        icon: 'pi pi-download',
        tooltipOptions: {
          tooltipLabel: 'Resume download',
          tooltipPosition: 'left'
        },
        command:()=>{
          this.openModal();
        }
      },
    ];
  }
}
