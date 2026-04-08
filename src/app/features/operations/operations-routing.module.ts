import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationsHomeComponent } from './pages/operations-home/operations-home.component';

const routes: Routes = [{ path: '', component: OperationsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule {}
