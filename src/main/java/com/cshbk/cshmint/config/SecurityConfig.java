package com.cshbk.cshmint.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * ==========================================
 * Project : cshmint > 보안 & 암호화 설정
 * Created by 한소라 [ 2026. 4. 27. 오전 8:48 ]
 * Description :
 * ==========================================
 */
@Configuration
public class SecurityConfig {

  /**
   * 암호화 설정 > 비밀번호 암호화
   * @return
   */
  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
