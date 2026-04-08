export type ApprovalStatus = 'pending' | 'approved' | 'rejected' | 'escalated';

export interface ApprovalRequest {
  id: string;
  category: 'headcount' | 'leave' | 'onboarding' | 'compensation';
  subject: string;
  requestedBy: string;
  submittedAt: string;
  status: ApprovalStatus;
}
