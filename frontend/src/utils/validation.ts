import {isEmpty, isEmailFormat, isPwdFormat} from "@/utils/cmmnUtil.ts";

/**
 * 이메일 Vaildation 체크
 * @param email
 */
export const emailValid = (email : string) => {
  if(isEmpty(email))  return "이메일 주소를 입력해주세요";
  if(!isEmailFormat(email)) return "이메일 형식을 확인해주세요";
  return "";
}

/**
 * 비밀번호 validtaion 체크
 * @param pwd
 */
export const pwdValid = (pwd: string) => {
  if(isEmpty(pwd)) return "비밀번호를 입력해주세요.";
  if(!isPwdFormat(pwd)) return "비밀번호는 대소문자, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.";
  return "";
}

/**
 * 비밀번호 validtaion 체크
 * @param pwd
 */
export const pwdChkValid = (pwd: string) => {
  if(isEmpty(pwd)) return "비밀번호 확인을 입력해주세요.";
  if(!isPwdFormat(pwd)) return "비밀번호 확인은 대소문자, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.";
  return "";
}



