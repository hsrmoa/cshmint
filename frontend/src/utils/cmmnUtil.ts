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
export const isEmpty = (str: string | null) => {
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

/**
 * 현재일자 정보 가져오기
 * @param format YYYYMMDD  or YYYY-MM-DD
 */
export const getTodayYmd = (format:string):string | Date => {
  const today = new Date();
  const year:string= today.getFullYear().toString();
  let month:number = today.getMonth() + 1;
  let day:number = today.getDate();

  // 월
  let mm = "";
  if(month < 10) {
    mm = "0" + month;
  } else {
    mm = month.toString();
  }
  // 일자
  let dd = "";
  if(day < 10) {
    dd = "0" + day;
  } else {
    dd = day.toString();
  }
  if(format == "YYYY-MM-DD") {
    return `${year}-${mm}-${dd}`;
  } else if(format === "YYYYMMDD") {
    return `${year}${mm}${dd}`;
  } else if(format === "YYYY") {
    return `${year}`;
  } else if(format === "YYYYMM") {
    return `${year}${mm}`
  } else if(format === "YYYY-MM") {
    return `${year}-${mm}`
  }
  return today;
}