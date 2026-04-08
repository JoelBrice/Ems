import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightsHomeComponent } from './pages/insights-home/insights-home.component';

const routes: Routes = [{ path: '', component: InsightsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightsRoutingModule {}
