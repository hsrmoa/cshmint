/**
 * 이메일 포맷 체크
 * @param email
 */
export const isEmailFormat = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * STRING 형식의 isNull 여부 체크
 */
export const isEmpty = (str: string) => {
  if(str === null || str === "" || str === undefined) {
    return true;
  } else {
    return false;
  }
}
/**
 * 비밀번호 조합 체크 (대소문자 + 숫자 + 특수문자  조합 8자리 이상)
 * @param pwd
 */
export const isPwdFormat = (pwd: string) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(pwd);
}