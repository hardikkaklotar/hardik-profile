import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  @ViewChild('myModal')
  myModal!: ElementRef;

  leftTooltipItems!: MenuItem[];

  constructor(private messageService: MessageService, private el: ElementRef, private renderer: Renderer2) { }
  closeAndDownload(): void {
    // Close the modal
    this.visible = false;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    // Download the image
    const imageUrl = 'https://cdn-blog.novoresume.com/articles/resume-examples/resume-example.webp';
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'resume-image.webp';
    link.click();
  }


  // CLICK BUTTON AND PAGE SCROLL ON TOP

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
        url: 'https://www.instagram.com/hardik_.kaklotar/'
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
        url: 'https://wa.me/9714514703'
      },
      {
        icon: 'pi pi-download',
        tooltipOptions: {
          tooltipLabel: 'Resume download',
          tooltipPosition: 'left'
        },
        command: () => {
          this.showDialog();
        }
      },
    ];
  }

  // Prevent the default action of the mousedown event
  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();
  }

}
