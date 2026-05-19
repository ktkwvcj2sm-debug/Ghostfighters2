export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  tag?: string;
  category?: string;
};

export type BestiaryEntry = {
  id: string;
  name: string;
  threatLevel: string; // e.g. "4/10"
  threatValue: number; // e.g. 4
  classBadge: string; // e.g. "КЛАСС 5"
  icon: string; // lucide icon name
  subtitle: string;
  description: string;
  image: string;
};

export type Capture = {
  id: string;
  title: string;
  location: string;
  date: string;
  amount: number;
  type: 'gain' | 'fine';
};

export type Message = {
  id: string;
  senderName: string;
  senderInitials: string;
  isAgent: boolean;
  content: string;
  timestamp: string;
  attachment?: {
    type: 'image' | 'scan';
    label: string;
    url: string;
  };
};

export enum ActiveScreen {
  DASHBOARD = 'DASHBOARD',
  MAP = 'MAP',
  GEAR = 'GEAR',
  PROFILE = 'PROFILE',
  BESTIARY = 'BESTIARY',
  SUBSCRIPTION = 'SUBSCRIPTION',
  FAQ = 'FAQ',
  CHAT = 'CHAT',
  REQ_DISPATCH = 'REQ_DISPATCH',
  RECEIPT = 'RECEIPT',
  TAXES = 'TAXES',
  SETTINGS = 'SETTINGS',
  RADAR = 'RADAR'
}

export type AgentProfile = {
  callsign: string;
  email: string;
  location: string;
  points: number;
  idCode: string;
  avatar: string;
};
