import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
  },
];

@NgModule({
  declarations: [SearchPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SearchPageModule {}
