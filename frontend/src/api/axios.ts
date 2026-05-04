import axios from 'axios';

/**
 * API 통신 공통 설젇
 */
const api  = axios.create({
    baseURL: 'http://localhost:8080'  // backend 주소
  , timeout: 5000
  , headers: {
      'Content-Type': 'application/json',
  }
});

/**
 * AXIOS > 요청 인터셉터
 */
api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');

    if(accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
},
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if(error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;