import axios from 'axios';
import { logout } from '@/features/authSlice';
import {store} from "@/app/store.ts";

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

/**
 * AXIOS > 요청 인터셉터
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if(error.response.data.status === 401) {
      // 로그아웃진행
      store.dispatch(logout());
      // 로그인화면으로
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default api;