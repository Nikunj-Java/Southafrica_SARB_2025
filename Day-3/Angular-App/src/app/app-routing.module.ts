import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { RformComponent } from './rform/rform.component';
import { TformComponent } from './tform/tform.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:"home",component:PipesComponent},
  {path:"rform",component:RformComponent},
  {path:"tform",component:TformComponent},
  {path:"todo",component:TodoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
