import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing-module';
import { Albums } from './albums';

@NgModule({
  declarations: [Albums],
  imports: [CommonModule, AlbumsRoutingModule],
})
export class AlbumsModule {}
