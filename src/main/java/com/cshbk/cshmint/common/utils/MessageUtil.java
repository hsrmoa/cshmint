package com.cshbk.cshmint.common.utils;

import lombok.RequiredArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;

import java.util.Locale;

/**
 * ==========================================
 * Project : cshmint > 메세지 Utill
 * Created by 한소라 [ 2026. 4. 28. 오후 8:45 ]
 * Description :
 * ==========================================
 */
@Component
@RequiredArgsConstructor
public class MessageUtil {

  // Message 소스
  private final MessageSource messageSource;

  /**
   * 메세지 Utils > 메세지 정보 가져오기
   *
   * @param code 메세지 코드
   * @param args args
   * @return
   */
  public String getMessage(String code, Object... args) {
    return messageSource.getMessage(code, args, Locale.getDefault());
  }
}
