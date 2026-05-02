package com.cshbk.cshmint.common.filter;

import com.cshbk.cshmint.common.utils.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

/**
 * ==========================================
 * Project : cshmint > JWT 인증 필터
 * Created by 한소라 [ 2026. 4. 29. 오전 8:46 ]
 * Description :
 * ==========================================
 */
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
  // JWT UTIL정보
  private final JwtUtil jwtUtil;

  @Override
  protected void doFilterInternal(
          HttpServletRequest request,
          HttpServletResponse response,
          FilterChain filterChain
  ) throws ServletException, IOException {
    // 요청 헤더 (Authorization) 정보 조회
    String header = request.getHeader("Authorization");
    // 헤더정보가 존재하며 TOKEN Bearer로 시작할때
    if (header != null && header.startsWith("Bearer ")) {
      // 헤더에서 받은 token 정보
      String token = header.substring(7);
      // TOKEN Validation 체크
      if (jwtUtil.validateToken(token)) {
        String email = jwtUtil.getEmail(token);

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                email
                , null
                , List.of()
        );
        // 인증정보 설정
        SecurityContextHolder.getContext().setAuthentication(authentication);
      }
    }
    filterChain.doFilter(request, response);
  }
}
