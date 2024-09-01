export interface User {
    id: number;
    username: string;
    email: string;
    emailNotifications: boolean;
    theme: 'light' | 'dark' | 'system';
}

export interface Collection {
    id: number;
    name: string;
    documentType: string;
    userId: number;
}

export interface Message {
    id: number;
    content: string;
    sender: 'user' | 'ai';
    timestamp: string;
    collectionId: number;
}

export interface PricingPlan {
    name: string;
    price: number;
    features: string[];
    color: string;
    isPopular?: boolean;
}

export interface ContactFormData {
    email: string;
    subject: string;
    message: string;
}