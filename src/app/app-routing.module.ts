import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { AddEntryComponent } from './components/add-entry/add-entry.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "task/:id",
    component: TaskDetailsComponent,
  },
  {
    path: "add",
    component: AddEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
