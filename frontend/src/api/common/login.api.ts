import api from '../axios';


type LoginRequest = {
  email: string;
  password: string;
}

/**
 * 로그인 실행 API
 * @param data
 */
export const loginApi = async (data: LoginRequest) => {
  const response = await api.post('/api/login/loginAction', data);

  return response.data;
};