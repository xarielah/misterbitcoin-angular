import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'contact/edit', component: ContactEditPageComponent },
  { path: 'contact/edit/:id', component: ContactEditPageComponent },
  { path: 'contact/:id', component: ContactDetailsPageComponent },
  { path: 'stats', component: StatsPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
