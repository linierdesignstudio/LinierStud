
export enum Language {
  ID = 'ID',
  EN = 'EN',
  CN = 'CN'
}

export enum ProjectCategory {
  ARCHITECTURE = 'Architecture',
  INTERIOR = 'Interior',
  CONSTRUCTION = 'Construction'
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  image: string;
  year: string;
  // New Fields for Detail Page
  client?: string;
  area?: string;
  description?: string;
  challenge?: string;
  solution?: string;
  gallery?: string[]; // Array of image URLs
  credits?: {
    architect?: string;
    photography?: string;
  }
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  path: string;
}
