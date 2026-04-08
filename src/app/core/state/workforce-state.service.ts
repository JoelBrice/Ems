import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { ApprovalRequest } from '../models/approval.model';
import { Employee } from '../models/employee.model';
import { OnboardingTask } from '../models/onboarding.model';
import { OrganizationUnit } from '../models/organization.model';

@Injectable({
  providedIn: 'root'
})
export class WorkforceStateService {
  private readonly employeesSubject = new BehaviorSubject<Employee[]>([
    {
      id: 'emp-1',
      employeeNumber: 'E1001',
      fullName: 'Amara Cole',
      title: 'Senior Software Engineer',
      departmentId: 'org-eng',
      managerId: 'emp-4',
      location: 'Nairobi',
      email: 'amara.cole@ems.local',
      status: 'active',
      startDate: '2023-04-10'
    },
    {
      id: 'emp-2',
      employeeNumber: 'E1002',
      fullName: 'Noah Kimani',
      title: 'HR Business Partner',
      departmentId: 'org-hr',
      location: 'Lagos',
      email: 'noah.kimani@ems.local',
      status: 'active',
      startDate: '2021-11-02'
    },
    {
      id: 'emp-3',
      employeeNumber: 'E1003',
      fullName: 'Sara Diaz',
      title: 'Product Analyst',
      departmentId: 'org-ops',
      managerId: 'emp-5',
      location: 'Madrid',
      email: 'sara.diaz@ems.local',
      status: 'onboarding',
      startDate: '2026-04-15'
    }
  ]);

  private readonly organizationUnitsSubject = new BehaviorSubject<OrganizationUnit[]>([
    { id: 'org-eng', name: 'Engineering', code: 'ENG', headcount: 42, managerName: 'Liam Grant' },
    { id: 'org-hr', name: 'Human Resources', code: 'HR', headcount: 14, managerName: 'Mia Chen' },
    { id: 'org-ops', name: 'Operations', code: 'OPS', headcount: 23, managerName: 'Idris Bello' }
  ]);

  private readonly onboardingTasksSubject = new BehaviorSubject<OnboardingTask[]>([
    {
      id: 'onb-1',
      employeeId: 'emp-3',
      taskName: 'Issue company laptop',
      ownerRole: 'it',
      dueDate: '2026-04-11',
      status: 'in-progress'
    },
    {
      id: 'onb-2',
      employeeId: 'emp-3',
      taskName: 'Benefits enrollment briefing',
      ownerRole: 'hr',
      dueDate: '2026-04-13',
      status: 'not-started'
    }
  ]);

  private readonly approvalsSubject = new BehaviorSubject<ApprovalRequest[]>([
    {
      id: 'apr-1',
      category: 'headcount',
      subject: 'Approve replacement hire for backend team',
      requestedBy: 'Liam Grant',
      submittedAt: '2026-04-06T10:15:00Z',
      status: 'pending'
    },
    {
      id: 'apr-2',
      category: 'onboarding',
      subject: 'Expedite onboarding budget for April cohort',
      requestedBy: 'Noah Kimani',
      submittedAt: '2026-04-07T08:20:00Z',
      status: 'escalated'
    }
  ]);

  readonly employees$ = this.employeesSubject.asObservable();
  readonly organizationUnits$ = this.organizationUnitsSubject.asObservable();
  readonly onboardingTasks$ = this.onboardingTasksSubject.asObservable();
  readonly approvals$ = this.approvalsSubject.asObservable();

  readonly workforceOverview$ = combineLatest([
    this.employees$,
    this.organizationUnits$,
    this.onboardingTasks$,
    this.approvals$
  ]).pipe(
    map(([employees, units, onboardingTasks, approvals]) => ({
      totalEmployees: employees.length,
      activeEmployees: employees.filter((employee) => employee.status === 'active').length,
      onboardingEmployees: employees.filter((employee) => employee.status === 'onboarding').length,
      departments: units.length,
      openOnboardingTasks: onboardingTasks.filter((task) => task.status !== 'completed').length,
      pendingApprovals: approvals.filter((approval) => approval.status === 'pending' || approval.status === 'escalated').length
    }))
  );
}
