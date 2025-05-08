import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { UsersComponent } from './users/users.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"users",component:UsersComponent},
  {path:"crud",component:CrudComponent},
  {path:"body",component:BodyComponent,children:[
    {path:"child-a",component:ChildAComponent},
    {path:"child-b",component:ChildBComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
