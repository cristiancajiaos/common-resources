import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing-module';
import { Comments } from './comments';

@NgModule({
  declarations: [Comments],
  imports: [CommonModule, CommentsRoutingModule],
})
export class CommentsModule {}
