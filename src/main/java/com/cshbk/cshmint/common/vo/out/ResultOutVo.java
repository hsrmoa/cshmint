package com.cshbk.cshmint.common.vo.out;

import lombok.Builder;
import lombok.Getter;

/**
 * ==========================================
 * Project : cshmint > API 응답 결과 공통 OUT VO
 * Created by 한소라 [ 2026. 3. 26. 오전 8:27 ]
 * Description :
 * ==========================================
 */
@Getter
@Builder
public class ResultOutVo<T> {

  private int status;   //   응답상태코드
  private boolean success;    //   성공여부
  private String message;   //   응답메세지
  private T data;           // 응답데이터


  /**
   * API 응답 RESPONSE 정보 > 성공 응답 정보
   *
   * @param data 응답 데이터 정보
   */
  public static <T> ResultOutVo<T> success(T data) {
    return ResultOutVo.<T>builder()
            .status(200)
            .success(true)
            .message("성공")
            .data(data)
            .build();
  }

  /**
   * API 응답 RESPONSE 정보 > 실퍠 응답정보
   *
   * @param status  오류상태코드
   * @param message 오류메세지
   */
  public static <T> ResultOutVo<T> fail(int status, String message) {
    return ResultOutVo.<T>builder()
            .status(status)
            .success(false)
            .message(message)
            .data(null)
            .build();
  }
}
