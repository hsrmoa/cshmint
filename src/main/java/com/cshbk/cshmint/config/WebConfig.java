package com.cshbk.cshmint.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * ==========================================
 * Project : cshmint > WEB Config
 * Created by 한소라 [ 2026. 3. 25. 오전 8:35 ]
 * Description : WEB 설정을 하는 클래스
 * ==========================================
 */
@Configuration
public class WebConfig {

  /**
   *  WEB 설정을 커스팅마이징을 위한 함수 >> CORS 설정
   * @return WebMvcConfigurer :: SPRING에서 웹설정을 커스터마이징할 때 쓰는 핵심 인터페이스
   */
  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")      // API 경로만 허옹
                .allowedOrigins("http://localhost:5173")    // React 주소 경로
                .allowedMethods("*")   // 모든 통신 메소드(GET,POST,PUT,DELETE) 전부 허용
                .allowedHeaders("*")      // 모든 헤더 허용
                .allowCredentials(true);  // 쿠키/ 토큰 허용
      }
    };
  }
}
