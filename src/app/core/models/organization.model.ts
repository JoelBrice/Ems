export interface OrganizationUnit {
  id: string;
  name: string;
  code: string;
  parentId?: string;
  headcount: number;
  managerName: string;
}
