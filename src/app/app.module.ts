import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OverviewComponent } from './overview/overview.component';
import { DialogTemplateComponent } from './dialog-template/dialog-template.component';
import { InformationComponent } from './overview/information/information.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule} from '@angular/router';
import { ResumeComponent } from './dialog-template/resume/resume.component';
import { FormsModule } from '@angular/forms';

/* PRIME IMPORT */
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OverviewComponent,
    DialogTemplateComponent,
    InformationComponent,
    ResumeComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,

    /* PRIME IMPORT */
    ButtonModule,
    SpeedDialModule,
    ToastModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
