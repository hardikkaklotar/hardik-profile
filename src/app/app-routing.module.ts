import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BennarComponent } from './overview/bennar/bennar.component';
import { AboutComponent } from './overview/about/about.component';
import { SkillsComponent } from './overview/skills/skills.component';
import { ServicesComponent } from './overview/services/services.component';
import { ContactComponent } from './overview/contact/contact.component';

const routes: Routes = [
  {path:'',component: BennarComponent,pathMatch: 'full'}, 
  {path: 'about', component: AboutComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path:'**', redirectTo: 'app-bennar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BennarComponent,AboutComponent,SkillsComponent,ServicesComponent,ContactComponent]
