package com.cshbk.cshmint.common.utils;

import com.cshbk.cshmint.common.properties.JwtProperties;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

/**
 * ==========================================
 * Project : cshmint > JWT Util
 * Created by 한소라 [ 2026. 4. 29. 오전 8:31 ]
 * Description :
 * ==========================================
 */
@Component
@RequiredArgsConstructor
public class JwtUtil {

  private final JwtProperties jwtProperties;

  /**
   * 암호화키 가져오기
   *
   * @return
   */
  private SecretKey getKey() {
    return Keys.hmacShaKeyFor(
            jwtProperties.getSecret().getBytes(StandardCharsets.UTF_8)
    );
  }

  /**
   * JWT >  TOEKN 생성
   *
   * @param email 이메일 주소
   * @return
   */
  public String createToken(String email) {
    Date now = new Date();
    Date expiry = new Date(now.getTime() + jwtProperties.getExpiration());
    return Jwts.builder()
            .subject(email)
            .issuedAt(now)
            .expiration(expiry)
            .signWith(getKey())
            .compact();
  }

  /**
   * JWT > 이메일 가져오기
   *
   * @param token 토큰
   * @return
   */
  public String getEmail(String token) {
    return Jwts.parser()
            .verifyWith(getKey())
            .build()
            .parseSignedClaims(token)
            .getPayload()
            .getSubject();
  }

  /**
   * JWT >  TOKEN Validation
   *
   * @param token 토큰
   * @return
   */
  public boolean validateToken(String token) {
    try {
      Jwts.parser()
              .verifyWith(getKey())
              .build()
              .parseSignedClaims(token);
      return true;
    } catch (Exception e) {
      return false;
    }
  }
}
