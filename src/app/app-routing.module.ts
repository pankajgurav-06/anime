import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './myComponents/aboutus/aboutus.component';
import { HomeComponent } from './myComponents/home/home.component';
import { MerchandiseComponent } from './myComponents/merchandise/merchandise.component';
import { SigninComponent } from './myComponents/signin/signin.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'signin', component: SigninComponent },
  // { path: 'aboutus', component: AboutusComponent },
  // { path: 'merchandise', component: MerchandiseComponent},
  {path: "pankaj",loadChildren:()=>import('./myComponents/my-components.module')
  .then(mod=>mod.MyComponentsModule)},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
