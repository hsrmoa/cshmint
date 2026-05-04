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
  console.log(response);
  const accessToken = response.data.data.accessToken;
  localStorage.setItem("accessToken", accessToken);

  return response.data;
};