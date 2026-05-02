package com.cshbk.cshmint.cmmn.login.vo.out;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/**
 * ==========================================
 * Project : cshmint >  로그인 결과 정보
 * Created by 한소라 [ 2026. 4. 29. 오후 12:15 ]
 * Description :
 * ==========================================
 */
@Getter
@Setter
@Builder
public class LoginOutVo {

  private String acessToken;   // JWT 인증토큰
  private int userSeq;
  private String userNm;
  private String email;

}
