import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoneComponent } from './done/done.component';
import { OpenComponent } from './open/open.component';

const routes: Routes = [
  { path: '', redirectTo: '/open', pathMatch: 'full' },
  { path: 'open', component: OpenComponent },
  { path: 'done', component: DoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
