import { Component } from '@angular/core';
import { WorkforceStateService } from '../../../../core/state/workforce-state.service';

@Component({
  selector: 'app-workforce-home',
  templateUrl: './workforce-home.component.html',
  styleUrls: ['./workforce-home.component.css']
})
export class WorkforceHomeComponent {
  readonly overview$ = this.workforceState.workforceOverview$;

  constructor(private readonly workforceState: WorkforceStateService) {}
}
