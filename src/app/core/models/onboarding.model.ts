export type OnboardingStatus = 'not-started' | 'in-progress' | 'blocked' | 'completed';

export interface OnboardingTask {
  id: string;
  employeeId: string;
  taskName: string;
  ownerRole: 'hr' | 'it' | 'manager' | 'employee';
  dueDate: string;
  status: OnboardingStatus;
}
