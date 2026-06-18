package com.cshbk.cshmint.common.handler;

import com.cshbk.cshmint.common.exception.CshMintBizException;
import com.cshbk.cshmint.common.utils.MessageUtil;
import com.cshbk.cshmint.common.vo.out.ResultOutVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * ==========================================
 * Project : cshmint > 공통 Exception Handler
 * Created by 한소라 [ 2026. 4. 26. 오후 3:49 ]
 * Description :
 * ==========================================
 */
@Slf4j
@RestControllerAdvice
@RequiredArgsConstructor
public class GlobalExceptionHandler {

  private final MessageUtil messageUtil;

  /**
   * 공통 EXCEPTION > Validation 오류 체크
   * @param e
   * @return
   */
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResultOutVo<?> handleValidation(MethodArgumentNotValidException e) {
    log.error("서버 오류 발생", e); // 이게 핵심
    String messsage = e.getBindingResult()
            .getFieldErrors()
            .get(0)
            .getDefaultMessage();
    return ResultOutVo.fail(HttpStatus.BAD_REQUEST.value(), messsage);
  }

  /**
   *  CshMintBizException >  비즈니스 공통 Exception 발생시
   * @param e
   * @return
   */
  @ExceptionHandler(CshMintBizException.class)
  public ResultOutVo<?> handleBusinessException(CshMintBizException e) {
    // 메세지 에러코드로 인한 메세지 정보
    String message = messageUtil.getMessage(e.getCode(), e.getArgs());

    return ResultOutVo.fail(e.getStatus(), message);
  }

  /**
   * 전역 Exception 처리
   * @param e
   * @return
   */
  @ExceptionHandler(Exception.class)
  public ResultOutVo<?> handleException(Exception e) {
    // 기본 서버 오류 메세지
    String message = messageUtil.getMessage("SERVER_CMM_001", null);

    return ResultOutVo.fail(500, message);
  }

}
