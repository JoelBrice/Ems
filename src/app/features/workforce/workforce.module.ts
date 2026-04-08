import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkforceRoutingModule } from './workforce-routing.module';
import { WorkforceHomeComponent } from './pages/workforce-home/workforce-home.component';
import { EmployeeDirectoryComponent } from './pages/employee-directory/employee-directory.component';
import { OrganizationStructureComponent } from './pages/organization-structure/organization-structure.component';
import { OnboardingCenterComponent } from './pages/onboarding-center/onboarding-center.component';
import { ApprovalsCenterComponent } from './pages/approvals-center/approvals-center.component';
import { SharedUiModule } from '../../shared/shared-ui.module';

@NgModule({
  declarations: [
    WorkforceHomeComponent,
    EmployeeDirectoryComponent,
    OrganizationStructureComponent,
    OnboardingCenterComponent,
    ApprovalsCenterComponent
  ],
  imports: [CommonModule, WorkforceRoutingModule, SharedUiModule]
})
export class WorkforceModule {}
