import { Component } from '@angular/core';
import { WorkforceStateService } from '../../../../core/state/workforce-state.service';

@Component({
  selector: 'app-onboarding-center',
  templateUrl: './onboarding-center.component.html',
  styleUrls: ['./onboarding-center.component.css']
})
export class OnboardingCenterComponent {
  readonly onboardingTasks$ = this.workforceState.onboardingTasks$;

  constructor(private readonly workforceState: WorkforceStateService) {}
}
