package com.cshbk.cshmint.common.properties;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * ==========================================
 * Project : cshmint > JWT Properties
 * Created by 한소라 [ 2026. 4. 29. 오전 8:27 ]
 * Description : applicatioin.yml의 값을 JAVA 객체로 매핑해주는 역할
 * ==========================================
 */
@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "jwt")
public class JwtProperties {

  private String secret;
  private long expiration;
}
