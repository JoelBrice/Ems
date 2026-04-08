import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsRoutingModule } from './operations-routing.module';
import { SharedUiModule } from '../../shared/shared-ui.module';
import { OperationsHomeComponent } from './pages/operations-home/operations-home.component';

@NgModule({
  declarations: [OperationsHomeComponent],
  imports: [CommonModule, OperationsRoutingModule, SharedUiModule]
})
export class OperationsModule {}
