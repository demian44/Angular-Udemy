import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkComponent } from './components/park/park.component';
import { StoreComponent } from './components/store/store.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'homePage' }
  },
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full',
    data: { animation: 'FilterPage' }
  },
  {
    path: 'store',
    component: StoreComponent,
    data: { animation: 'storePage' }
  },
  {
    path: 'animals',
    component: AnimalsComponent,
    data: { animation: 'animalsPage' }
  },
  {
    path: 'keepers',
    component: KeepersComponent,
    data: { animation: 'keepersPage' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contactPage' }
  },
  {
    path: '**',
    component: HomeComponent,
    data: { animation: 'FilterPage' }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
