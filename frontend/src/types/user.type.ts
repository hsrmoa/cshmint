/**
 * 공통으로 쓰는 사용자 User type
 */

export type LoginRequest = {
  // 이메일주소
  email: string;
  // 비밀번호
  password: string;
}

/**
 * 회원가입 실행 RequestType
 */
export type JoinUserRequest = {
  // 이메일 주소
  email: string;
  // 비밀번호
  pwd: string;
  // 사용자 이름
  userNm: string;
  // 사용자 이미지 ( 추후에 FILE로 변경 후 파일저장으로 변경예정)
  proImg: string | null;
}