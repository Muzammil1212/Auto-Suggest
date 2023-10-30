import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { AppComponent } from './app.component';
import { DragformComponent } from './dragform/dragform.component';

const routes: Routes = [{ path: 'blank', component:BlankComponent},
{path:'form',component:DragformComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
