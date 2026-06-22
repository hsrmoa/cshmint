/**
 * 공통으로 쓰는 사용자 User type
 */

export type LoginRequest = {
  email: string;
  password: string;
}

/**
 * 회원가입 실행 RequestType
 */
export type JoinUserRequest = {
  email: string;
  pwd: string;
  userNm: string;
  proImg: string;
}