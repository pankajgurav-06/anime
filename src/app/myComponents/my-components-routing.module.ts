import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';

import { MerchandiseComponent } from './merchandise/merchandise.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
 
    
    { path: 'signin', component: SigninComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'merchandise', component: MerchandiseComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyComponentsRoutingModule { }
