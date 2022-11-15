import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"" , redirectTo:"home",pathMatch:"full"},
{path:"home" , component:HomeComponent},
{path:"portfolio" , component:AboutComponent},
{path:"about" , component:BlogComponent},
{path:"contact" , component:ContactComponent},
{path:"**" , component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
