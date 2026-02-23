// import axios from 'axios';

// const API_BASE_URL = 'https://ai-helpdesk-system-vas2.onrender.com';

// const apiClient = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Add JWT token to headers
// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Authentication APIs
// export const login = async (username, password) => {
//   try {
//     const response = await apiClient.post('/auth/login', { username, password });
//     return response.data;
//   } catch (error) {
//     console.error('Login API error:', error);
//     throw error;
//   }
// };

// // Ticket Management APIs
// export const updateTicket = async (ticketId, data) => {
//   try {
//     const response = await apiClient.put(`/tickets/update/${ticketId}`, data);
//     return response.data;
//   } catch (error) {
//     console.error('Update Ticket API error:', error);
//     throw error;
//   }
// };

// export const getTicket = async (ticketId) => {
//   try {
//     const response = await apiClient.put(`/tickets/${ticketId}`);
//     return response.data;
//   } catch (error) {
//     console.error('Get Ticket API error:', error);
//     throw error;
//   }
// };

// export const getAllTickets = async () => {
//   try {
//     const response = await apiClient.put('/tickets/');
//     return response.data;
//   } catch (error) {
//     console.error('Get All Tickets API error:', error);
//     throw error;
//   }
// };

// // Metrics APIs
// export const getMetrics = async () => {
//   try {
//     const response = await apiClient.get('/metrics');
//     return response.data;
//   } catch (error) {
//     console.error('Get Metrics API error:', error);
//     throw error;
//   }
// };