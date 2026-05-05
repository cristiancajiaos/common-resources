import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing-module';
import { Todos } from './todos';

@NgModule({
  declarations: [Todos],
  imports: [CommonModule, TodosRoutingModule],
})
export class TodosModule {}
