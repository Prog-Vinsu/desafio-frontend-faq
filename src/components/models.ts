export interface FaqRawItem {
  id: string;
  answer: string;
  publish_date: string;
  ticket: {
    description: string | null;
    created_at: string;
  };
  files: unknown[];
}

export interface FaqApiResponse {
  data: FaqRawItem[];
}

export interface FaqItem {
  id: string;
  title: string;
  content: string;
  searchString: string;
}
