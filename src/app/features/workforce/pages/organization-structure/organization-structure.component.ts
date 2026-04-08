import { Component } from '@angular/core';
import { WorkforceStateService } from '../../../../core/state/workforce-state.service';

@Component({
  selector: 'app-organization-structure',
  templateUrl: './organization-structure.component.html',
  styleUrls: ['./organization-structure.component.css']
})
export class OrganizationStructureComponent {
  readonly organizationUnits$ = this.workforceState.organizationUnits$;

  constructor(private readonly workforceState: WorkforceStateService) {}
}
