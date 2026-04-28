package com.cshbk.cshmint.cmmn.join.service;

import com.cshbk.cshmint.cmmn.join.vo.in.JoinUserInVo;

/**
 * ==========================================
 * Project : cshmint > 회원가입 서비스 인터페이스
 * Created by 한소라 [ 2026. 4. 26. 오후 5:17 ]
 * Description :
 * ==========================================
 */
public interface JoinService {

  /**
   * 회원가입 > 이메일 중복여부 체크
   *
   * @param joinUserInVo 이메일 체크 IN VO
   * @return
   */
  int getEmailCheck(JoinUserInVo joinUserInVo);

  /**
   * 회원가입 > 사용자등록
   *
   * @param joinUserInVo 사용자등록 IN VO
   * @return
   */
  int addUser(JoinUserInVo joinUserInVo);
}
