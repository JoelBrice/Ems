import { Component } from '@angular/core';
import { WorkforceStateService } from '../../../../core/state/workforce-state.service';

@Component({
  selector: 'app-employee-directory',
  templateUrl: './employee-directory.component.html',
  styleUrls: ['./employee-directory.component.css']
})
export class EmployeeDirectoryComponent {
  readonly employees$ = this.workforceState.employees$;

  constructor(private readonly workforceState: WorkforceStateService) {}
}
