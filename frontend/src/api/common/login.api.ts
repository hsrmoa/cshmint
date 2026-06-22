import api from '../axios';
import type { LoginRequest, JoinUserRequest} from "@/types/user.type.ts";

/**
 * 로그인 실행 API
 * @param data
 */
export const loginApi = async (data: LoginRequest) => {
  const response = await api.post('/api/login/loginAction', data);

  return response.data;
};

/**
 * 회원가입 API
 * @param data  회원가입 회원정보
 */
export const joinApi = async (data: JoinUserRequest) => {
  const response = await api.post('/api/join/addUser', data);

  return response.data;
}