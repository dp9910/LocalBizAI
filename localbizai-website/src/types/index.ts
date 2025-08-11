import { Timestamp } from 'firebase/firestore';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  businessType: string;
  createdAt: Timestamp;
  subscription: {
    plan: 'starter' | 'professional' | 'enterprise';
    status: 'active' | 'inactive' | 'trial';
    expiresAt: Timestamp;
  };
  profile: {
    businessName: string;
    industry: string;
    employeeCount: number;
    currentTools: string[];
    painPoints: string[];
    goals: string[];
  };
}

export interface Assessment {
  userId: string;
  responses: Record<string, any>;
  recommendations: {
    tools: string[];
    priority: 'high' | 'medium' | 'low';
    estimatedROI: number;
    implementationPlan: string[];
  };
  createdAt: Timestamp;
}

export interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}