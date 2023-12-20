import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
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
import { BennarComponent } from './overview/bennar/bennar.component';
import { AboutComponent } from './overview/about/about.component';
import { SkillsComponent } from './overview/skills/skills.component';
import { ServicesComponent } from './overview/services/services.component';
import { ContactComponent } from './overview/contact/contact.component';
import { InformationComponent } from './overview/information/information.component';
import {MatDialogModule} from '@angular/material/dialog';
/* Routing code  */ 
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  {path:'',component: BennarComponent,pathMatch: 'full'}, 
  {path: 'about', component: AboutComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path:'**', redirectTo: 'app-bennar'}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OverviewComponent,
    DialogTemplateComponent,
    BennarComponent,
    AboutComponent,
    SkillsComponent,
    ServicesComponent,
    ContactComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
