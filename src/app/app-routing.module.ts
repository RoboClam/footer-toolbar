import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LikesComponent } from './likes/likes.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent},
  { path: 'likes', component:  LikesComponent},
  { path: 'search', component:  SearchComponent},
  { path: 'profile', component:  ProfileComponent},
  { path: '**', redirectTo: '/home'},
  // { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
