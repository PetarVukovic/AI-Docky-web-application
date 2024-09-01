import axios from 'axios';
import { User, Collection, Message } from '../utils/types';

const API_URL = 'http://localhost:3000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor za dodavanje tokena u zaglavlje
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export const loginUser = (username: string, password: string) =>
    api.post<{ token: string; user: User }>('/users/login', { username, password });

export const registerUser = (username: string, email: string, password: string) =>
    api.post<{ token: string; user: User }>('/users/register', { username, email, password });

export const getCollections = () =>
    api.get<Collection[]>('/collections');

export const createCollection = (name: string, documentType: string) =>
    api.post<Collection>('/collections', { name, documentType });

export const getMessages = (collectionId: number) =>
    api.get<Message[]>(`/messages/${collectionId}`);

export const sendMessage = (collectionId: number, content: string) =>
    api.post<Message>(`/messages/${collectionId}`, { content });

export const updateUserSettings = (settings: Partial<User>) =>
    api.put<User>('/user/settings', settings);

export const submitContactForm = (email: string, subject: string, message: string) =>
    api.post('/contact', { email, subject, message });

export default api;