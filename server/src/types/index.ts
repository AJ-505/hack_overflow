export interface Incident {
  id: number;
  title: string;
  summary: string;
  user_id: number;
  status: 'pending' | 'in progress' | 'resolved';
  upvotes: number;
  downvotes: number;
  created_at: Date;
  categories: string[];
}

export interface Comment {
  id: number;
  incident_id: number;
  user_id: number;
  content: string;
  created_at: Date;
}