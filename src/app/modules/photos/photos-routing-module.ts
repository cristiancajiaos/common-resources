import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Photos } from './photos';

const routes: Routes = [{ path: '', component: Photos }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosRoutingModule {}
