import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing-module';
import { Photos } from './photos';

@NgModule({
  declarations: [Photos],
  imports: [CommonModule, PhotosRoutingModule],
})
export class PhotosModule {}
