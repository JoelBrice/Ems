import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '../../shared/shared-ui.module';
import { InsightsRoutingModule } from './insights-routing.module';
import { InsightsHomeComponent } from './pages/insights-home/insights-home.component';

@NgModule({
  declarations: [InsightsHomeComponent],
  imports: [CommonModule, SharedUiModule, InsightsRoutingModule]
})
export class InsightsModule {}
