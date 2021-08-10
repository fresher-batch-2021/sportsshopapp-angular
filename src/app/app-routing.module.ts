import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListtaskComponent } from './listtask/listtask.component';
import { CricketComponent } from './cricket/cricket.component';
import { RegisterComponent } from './register/register.component';
import { FootballComponent } from './football/football.component';


const Routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'listtask',component:ListtaskComponent},
  {path:'cricket',component:CricketComponent},
  {path:'football',component:FootballComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
