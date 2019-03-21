import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'new', component: HeroFormComponent},
  // { path: 'buttons', component: ButtonsComponent},
  // { path: 'messages', component: MessagesComponent},
  // { path: 'solar', component: SolarComponent},
  // { path: 'scroll', component: ScrollingComponent},
  // { path: 'material', component: MaterialTestComponent},
  // { path: 'special-thanks', component: SpecialThanksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
