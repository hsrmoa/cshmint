package com.cshbk.cshmint.common.handler;

import com.cshbk.cshmint.common.vo.out.ResultOutVo;
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
@RestControllerAdvice
public class GlobalExcptionHandler {

  /**
   * 공통 EXCEPTION > Validation 오류 체크
   * @param e
   * @return
   */
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResultOutVo<?> handleValidation(MethodArgumentNotValidException e) {
    String messsage = e.getBindingResult()
            .getFieldErrors()
            .get(0)
            .getDefaultMessage();
    return ResultOutVo.fail(HttpStatus.BAD_REQUEST.value(), messsage);
  }
}
