export type UserRole = 'parent' | 'student';

export type ParentData = {
  firstName: string;
  lastName: string;
  dni: string;
  relationship: string;
  email: string;
};

export type ChildData = {
  firstName: string;
  lastName: string;
  dni: string;
};

export type StudentData = {
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  grade: string;
  section: string;
};