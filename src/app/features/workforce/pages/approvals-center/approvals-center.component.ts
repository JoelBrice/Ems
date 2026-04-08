import { Component } from '@angular/core';
import { WorkforceStateService } from '../../../../core/state/workforce-state.service';

@Component({
  selector: 'app-approvals-center',
  templateUrl: './approvals-center.component.html',
  styleUrls: ['./approvals-center.component.css']
})
export class ApprovalsCenterComponent {
  readonly approvals$ = this.workforceState.approvals$;

  constructor(private readonly workforceState: WorkforceStateService) {}
}
