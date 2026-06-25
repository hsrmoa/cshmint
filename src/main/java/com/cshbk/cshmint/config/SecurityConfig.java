package com.cshbk.cshmint.config;

import com.cshbk.cshmint.common.filter.JwtAuthenticationFilter;
import com.cshbk.cshmint.common.utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * ==========================================
 * Project : cshmint > 보안 & 암호화 설정
 * Created by 한소라 [ 2026. 4. 27. 오전 8:48 ]
 * Description :
 * ==========================================
 */
@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

  private final JwtUtil jwtUtil;
  /**
   * 암호화 설정 > 비밀번호 암호화
   * @return
   */
  @Bean
  public PasswordEncoder passwordEncoder() {
    // 비밀번호를 암호화
    // 로그인 시 비밀번호를 비교
    return new BCryptPasswordEncoder();
  }

  /**
   * 암호화설정 > 보안설정 (JWT, 인증, 권한)
   * @param http
   * @return
   * @throws Exception
   */
  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    /**
     * [INFO] :: CSRF
     * CRSF 끄기  csrf -> csrf.disable();
     * JWT 방식에서는 필요없음
     * 안끄면 POST 요청이 막힘
     */

    /**
     * [INFO] :: formLogin / httpBasic
     * Spring에서 제공하는 기본 로그인 페이지를 제거 form -> form.disable() / basic -> basic.disable()
     * JWT 방식으로 직접 로그인 처리하기 때문에
     */

    /**
     * [INFO] :: sessionManagement
     * 세션을 사용하지 않음
     * 서버에 세션 저장을 안함, 인증은 JWT로만 처리
     */

    /**
     * [INFO] :: authorizeHttpRequests
     * URL 접근 권한을 설정
     * 입력한 URL정보만 허용하지만 나머지는 로그인을 해야 접근가능!
     */

    /**
     * [INFO] :: addFilterBefore
     * 요청이 들어올 때마자 JWT를 검서
     * 인증된 사용자로 만들어줌
     */
    return http
            .csrf(csrf -> csrf.disable())
            .formLogin(form -> form.disable())
            .httpBasic(basic -> basic.disable())
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth.requestMatchers(
                    "/api/login/**",
                    "/api/join/**",
                    "/api/mypage/**",
                    "/swagger-ui/**",
                    "/v3/api-docs/**"
                  ).permitAll()
                    .anyRequest().authenticated()
            )
            .addFilterBefore(
                    new JwtAuthenticationFilter(jwtUtil),
                    UsernamePasswordAuthenticationFilter.class
            )
            .build();
  }
}
