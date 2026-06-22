package com.cshbk.cshmint.cmmn.login.service.impl;

import com.cshbk.cshmint.cmmn.login.mapper.LoginMapper;
import com.cshbk.cshmint.cmmn.login.service.LoginService;
import com.cshbk.cshmint.cmmn.login.vo.in.LoginInVo;
import com.cshbk.cshmint.cmmn.login.vo.out.LoginOutVo;
import com.cshbk.cshmint.common.enums.ErrorCode;
import com.cshbk.cshmint.common.exception.CshMintBizException;
import com.cshbk.cshmint.common.utils.JwtUtil;
import com.cshbk.cshmint.common.vo.out.UserVo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * ==========================================
 * Project : cshmint > 로그인 서비스 Impl
  * Created by 한소라 [ 2026. 4. 26. 오후 4:38 ]
 * Description :
 * ==========================================
 */
@Service
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService {

  private final LoginMapper loginMapper;    //   로그인 Mapper
  private final PasswordEncoder passwordEncoder;
  private final JwtUtil jwtUtil;

  /**
   * 로그인 > 로그인 실행
   * @param loginInVo  로그인 정보 IN VO
   * @return
   */
  @Override
  public LoginOutVo loginAction(LoginInVo loginInVo) {
    // 로그인 정보로 회원정보 조회
    UserVo userVo = loginMapper.selectUser(loginInVo);
    // 이메일정보가 없을때
    if(userVo == null) {
      throw new CshMintBizException(ErrorCode.LOGIN_FAIL);
    }
    // 로그인 정보로 입력받은 비밀번호와 데이터로 받은 비밀번호의 매칭여부(암호화)
    boolean isPwdMatch = passwordEncoder.matches(loginInVo.getPassword(), userVo.getPwd());
    // 매칭이 안되었으면 로그인실패
    if(!isPwdMatch) {
      throw new CshMintBizException(ErrorCode.LOGIN_FAIL);
    }
    // 이메일 존재 + 비밀번호 매칭 ==. 로그인성공
    // 로그인 TOKEN 생성
    String accessToken = jwtUtil.createToken(userVo.getEmail());
    UserVo userInfo = UserVo.builder()
            .userSeq(userVo.getUserSeq())
            .email(userVo.getEmail())
            .proImg(userVo.getProImg())
            .userNm(userVo.getUserNm())
            .build();

    // 로그인 정보 반환
    return LoginOutVo.builder()
            .accessToken(accessToken)
            .userInfo(userInfo)
            .build();
  }
}
