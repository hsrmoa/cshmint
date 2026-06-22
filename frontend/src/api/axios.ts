import axios from 'axios';
import { useDispatch } from "react-redux";
import { logout } from '@/features/authSlice';
import {useAppNavigate} from "@/hooks/navigate/useAppNavigate.ts";

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
    const dispath = useDispatch();
    const { goLogin } = useAppNavigate();
    if(error.response?.status === 401) {
      // localstorage에 Token 정보 및 로그인 정보 삭제
      dispath(logout());
      // 로그인 화면으로 이동
      goLogin();
    }
    return Promise.reject(error);
  }
);

export default api;