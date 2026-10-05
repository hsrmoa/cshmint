package com.cshbk.cshmint.common.filter;

import com.cshbk.cshmint.cmmn.login.mapper.LoginMapper;
import com.cshbk.cshmint.cmmn.login.vo.in.LoginInVo;
import com.cshbk.cshmint.common.utils.JwtUtil;
import com.cshbk.cshmint.common.vo.out.LoginUser;
import com.cshbk.cshmint.common.vo.out.UserVo;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
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
  private final LoginMapper loginMapper;

  @Override
  protected void doFilterInternal(
          HttpServletRequest request,
          HttpServletResponse response,
          FilterChain filterChain
  ) throws ServletException, IOException {

    // 요청 헤더 (Authorization) 정보 조회
    String header = request.getHeader("Authorization");

    /*
     * Authorization 헤더가 없거나
     * Bearer 형식이 아닌 경우에는 다음 필터로 이동
     *
     * 로그인 API 또는 인증이 필요 없는 API일 수 있으므로
     * 여기에서 바로 401을 반환하면 안 됩니다.
     */
    if (header == null || !header.startsWith("Bearer ")) {
      filterChain.doFilter(request, response);
      return;
    }

    // 헤더정보가 존재하며 TOKEN Bearer로 시작할때
    // 헤더에서 받은 token 정보
    String token = header.substring(7);

    /*
     * 토큰이 만료되었거나 서명이 잘못된 경우
     * validateToken()이 false를 반환
     */
    if (!jwtUtil.validateToken(token)) {
      writeUnauthorizedResponse(response,
              "로그인 세션이 만료되었거나 유효하지 않은 인증 정보입니다."
      );
      return;
    }
    // JWT 이메일 조회
    String email = jwtUtil.getEmail(token);
    // 이메일로 사용자 정보 조회
    LoginInVo inVo = new LoginInVo();
    inVo.setEmail(email);
    UserVo userVo = loginMapper.selectUser(inVo);

    /*
     * JWT는 유효하지만 사용자가 삭제되었거나
     * 사용자 정보를 찾지 못한 경우
     */
    if (userVo == null) {
      writeUnauthorizedResponse(
              response,
              "로그인 사용자 정보를 찾을 수 없습니다."
      );
      return;
    }

    LoginUser loginUser = new LoginUser(
            userVo.getUserSeq(),
            userVo.getEmail(),
            userVo.getUserNm(),
            userVo.getPwd(),
            List.of());
    // 인증 객체 생성
    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
            loginUser
            , null
            , loginUser.getAuthorities()
    );
    // 인증정보 설정
    SecurityContextHolder.getContext().setAuthentication(authentication);
    // 다음 필터 실행
    filterChain.doFilter(request, response);
  }


  /**
   * 인증 실패 응답
   *
   * @param response HTTP 응답
   * @param message  응답 메시지
   */
  private void writeUnauthorizedResponse(
          HttpServletResponse response,
          String message
  ) throws IOException {

    // 기존 인증 정보 제거
    SecurityContextHolder.clearContext();

    // HTTP 상태 코드 401
    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

    // JSON 한글 깨짐 방지
    response.setContentType("application/json");
    response.setCharacterEncoding(StandardCharsets.UTF_8.name());

    // 응답 데이터 작성
    response.getWriter().write("""
                    {
                      "status": 401,
                      "message": "%s"
                    }
                    """.formatted(message)
    );
  }
}
