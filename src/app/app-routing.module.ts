import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path: "", component: ProfileComponent},
  {path: "gallery", component: GalleryComponent},
  {path: "contact", component: ContactComponent},
  { path: '**', redirectTo: "" },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
