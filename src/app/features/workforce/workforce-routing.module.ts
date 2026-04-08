import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalsCenterComponent } from './pages/approvals-center/approvals-center.component';
import { EmployeeDirectoryComponent } from './pages/employee-directory/employee-directory.component';
import { OnboardingCenterComponent } from './pages/onboarding-center/onboarding-center.component';
import { OrganizationStructureComponent } from './pages/organization-structure/organization-structure.component';
import { WorkforceHomeComponent } from './pages/workforce-home/workforce-home.component';

const routes: Routes = [
  { path: '', component: WorkforceHomeComponent },
  { path: 'employees', component: EmployeeDirectoryComponent },
  { path: 'organization', component: OrganizationStructureComponent },
  { path: 'onboarding', component: OnboardingCenterComponent },
  { path: 'approvals', component: ApprovalsCenterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkforceRoutingModule {}
