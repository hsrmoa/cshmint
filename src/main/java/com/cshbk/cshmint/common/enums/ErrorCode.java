package com.cshbk.cshmint.common.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * ==========================================
 * Project : cshmint >  에러코드
 * Created by 한소라 [ 2026. 4. 28. 오전 8:30 ]
 * Description :
 * ======================== ==================
 */
@Getter
@AllArgsConstructor
public enum ErrorCode {
  // 중복체크
  DUPLICATE_CHECK(400,"CMMN_ERROR_MSG_001"),
  // 서버오류
  SERVER_ERROR_500(500, "SERVER_CMM_001")
  ;

  private final int status;     // 서버상태코드
  private final String code;    // 메세지코드
}
