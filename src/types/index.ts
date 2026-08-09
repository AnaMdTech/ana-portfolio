export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  client: string;
  role: string;
  year: string;
  liveUrl?: string;
  imageUrl: string;
  overview: string;
  challenges: string;
  solution: string;
  results: string;
  conclusion: string;
  galleryImages: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  leadParagraph: string;
  content: string[];
  takeaway: string;
}

export interface NavLink {
  label: string;
  href: string;
}