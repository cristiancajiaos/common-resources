import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comments } from './comments';

const routes: Routes = [{ path: '', component: Comments }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsRoutingModule {}
