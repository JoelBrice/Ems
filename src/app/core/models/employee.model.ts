export type EmploymentStatus = 'active' | 'onboarding' | 'leave' | 'inactive';

export interface Employee {
  id: string;
  employeeNumber: string;
  fullName: string;
  title: string;
  departmentId: string;
  managerId?: string;
  location: string;
  email: string;
  status: EmploymentStatus;
  startDate: string;
}
