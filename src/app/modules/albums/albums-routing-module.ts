import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Albums } from './albums';

const routes: Routes = [{ path: '', component: Albums }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule {}
