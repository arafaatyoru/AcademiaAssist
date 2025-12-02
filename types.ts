import React from 'react';

export type Weekday = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export interface User {
  id: string;
  name: string;
  studentId: string;
  avatar: string;
}

export interface RelatedLink {
  title: string;
  url: string;
}

export interface Topic {
  id: string;
  title: string;
}

export interface ExamQuestion {
  id: string;
  question: string;
}

export interface MCQ {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  marks: number;
  teachers: string[];
  driveLink: string;
  notebookLink: string;
  objectives?: string;
  description?: string;
  outcomes?: string[];
  readings?: string[];
  relatedLinks?: RelatedLink[];
  topics: Topic[];
  theoryQuestions: ExamQuestion[];
  mcqs: MCQ[];
}

export type AttendanceStatus = 'present' | 'absent' | 'excused' | 'late' | 'none';

export interface AttendanceRecord {
  courseId: string;
  date: string;
  status: AttendanceStatus;
  timestamp: number;
  sessionTime?: string;
}

export type AssignmentType = 'Assignment' | 'Class Test' | 'Presentation' | 'Project';

export interface Assignment {
  id: string;
  title: string;
  courseId: string;
  dueDate: string;
  type: AssignmentType;
  marks: number;
  completed: boolean;
}

export interface Session {
  timeStart: string;
  timeEnd: string;
  courseId: string;
}

export interface DailySchedule {
  day: Weekday;
  sessions: Session[];
}

export interface UserSettings {
  includeExcusedInCalc: boolean;
  theme: 'dark' | 'light';
}

export interface TopicProgress {
  [courseId: string]: {
    [topicId: string]: boolean;
  }
}

export interface StatCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  trend?: 'up' | 'down' | 'neutral';
  color?: string;
  icon?: React.ReactNode;
}