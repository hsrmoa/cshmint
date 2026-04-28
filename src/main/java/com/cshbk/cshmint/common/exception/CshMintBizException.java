package com.cshbk.cshmint.common.exception;

import com.cshbk.cshmint.common.enums.ErrorCode;
import lombok.Getter;

/**
 * ==========================================
 * Project : cshmint > 비즈니스 에러 Exception
 * Created by 한소라 [ 2026. 4. 28. 오전 8:27 ]
 * Description :
 * ==========================================
 */
@Getter
public class CshMintBizException extends RuntimeException {
  private final int status;
  private final String code;
  private final Object[] args;

  /**
   * Exception > 에러 Exception 처리
   * @param errorCode  에러코드 enums
   * @param args 에러메세지
   */
  public CshMintBizException(ErrorCode errorCode, Object... args) {
    this.status = errorCode.getStatus();
    this.code = errorCode.getCode();
    this.args = args;
  }

}
