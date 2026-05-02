package com.cshbk.cshmint.cmmn.login.service;

import com.cshbk.cshmint.cmmn.login.vo.in.LoginInVo;
import com.cshbk.cshmint.cmmn.login.vo.out.LoginOutVo;

/**
 * ==========================================
 * Project : cshmint > 로그인 서비스 인터페이스
 * Created by 한소라 [ 2026. 4. 26. 오후 4:37 ]
 * Description :
 * ==========================================
 */
public interface LoginService {

  /**
   * 로그인 > 로그인 실행
   * @param loginInVo  로그인 정보 IN VO
   * @return
   */
  LoginOutVo loginAction(LoginInVo loginInVo);
}
