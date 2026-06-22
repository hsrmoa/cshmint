import {createSlice} from "@reduxjs/toolkit";
import { isEmpty } from "@/utils/cmmnUtil.ts";

/**
 *  로그인한 사용자 정보
 */
interface UserInfo {
  email: string;
  userNm: string;
  userSeq: number;
  proImg: string;
}

/**
 *  로그인 계정 상태정보
 */
interface AuthState {
  accessToken: string | null;
  userInfo: UserInfo | null;
  isLogin: boolean;
}

/**
 * 초기 상태 설정
 */
const initialState: AuthState = {
  accessToken: localStorage.getItem("accessToken"),
  userInfo: JSON.parse(localStorage.getItem("userInfo") || "null"),
  isLogin: !isEmpty(localStorage.getItem("accessToken")),
};


/**
 *  사용자권한 Slice
 */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.userInfo = action.payload.userInfo;
      state.isLogin = true;

      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem(
        "userInfo",
        JSON.stringify(action.payload.userInfo)
      );
    },
    logout: (state) => {
      state.accessToken = null;
      state.userInfo = null;
      state.isLogin = false;

      localStorage.removeItem("accessToken");
      localStorage.removeItem("userInfo");
    }
  }
});

export const { login, logout} = authSlice.actions;
export default authSlice.reducer;
