import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogoComponent } from './logo/logo.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: '', redirectTo: '/logo', pathMatch: 'full' },
  { path: 'logo', component: LogoComponent },
  { path: 'navigation', component: NavigationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
