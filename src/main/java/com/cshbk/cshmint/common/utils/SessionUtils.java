package com.cshbk.cshmint.common.utils;

import com.cshbk.cshmint.common.vo.out.LoginUser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * ==========================================
 * Project : cshmint > Session 정보
 * Created by 한소라 [ 2026. 7. 12. 오전 8:54 ]
 * Description :
 * ==========================================
 */
@Slf4j
public final class SessionUtils {

  private SessionUtils() {
    // 인스턴스 생성 방지
  }

  /**
   * 현재 로그인 사용자의 LoginUsr 반환
   */
  public static LoginUser getLoginUser() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    log.info("authentication={}", authentication);
    if (authentication == null
            || !authentication.isAuthenticated()
            || authentication instanceof AnonymousAuthenticationToken) {
      log.error("로그인 사용자 정보가 없습니다. authentication={}", authentication);
      throw new IllegalStateException("로그인 사용자 정보가 없습니다.");
    }
    Object principal = authentication.getPrincipal();
    if (!(principal instanceof LoginUser)) {
      log.error("로그인 사용자 타입 오류. principal type={}",
              principal.getClass().getName());
      throw new IllegalStateException("로그인 사용자 타입이 올바르지 않습니다.");
    }
    return (LoginUser) principal;
  }

  /**
   * 로그인 사용자 순번
   */
  public static Long getUserSeq() {
    return getLoginUser().getUserSeq();
  }

  /**
   * 로그인 사용자 ID
   */
  public static String getEmail() {
    return getLoginUser().getEmail();
  }

  /**
   * 로그인 사용자 이름
   */
  public static String getUserNm() {
    return getLoginUser().getUserNm();
  }

  /**
   * 로그인 여부
   */
  public static boolean isLogin() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

    return authentication != null
            && authentication.isAuthenticated()
            && !(authentication instanceof AnonymousAuthenticationToken);
  }
}
