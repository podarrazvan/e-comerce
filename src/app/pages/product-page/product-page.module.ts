import { NgModule } from '@angular/core';
import { ProductPageComponent } from './product-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ProductPageGalleryComponent } from './product-page-gallery/product-page-gallery.component';
import { ProductPageInfoComponent } from './product-page-info/product-page-info.component';

const components = [
  ProductPageComponent,
  ProductPageGalleryComponent,
  ProductPageInfoComponent,
];
const routes: Routes = [
  {
    path: '',
    component: ProductPageComponent,
  },
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ProductPageModule {}
