package com.cshbk.cshmint.cmmn.join.service.impl;

import com.cshbk.cshmint.cmmn.join.mapper.JoinMapper;
import com.cshbk.cshmint.cmmn.join.service.JoinService;
import com.cshbk.cshmint.cmmn.join.vo.in.JoinUserInVo;
import com.cshbk.cshmint.common.enums.ErrorCode;
import com.cshbk.cshmint.common.exception.CshMintBizException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * ==========================================
 * Project : cshmint > 회원가입 서비스 impl
 * Created by 한소라 [ 2026. 4. 26. 오후 5:17 ]
 * Description :
 * ==========================================
 */
@Service
public class JoinServiceImpl implements JoinService {

  @Autowired
  private JoinMapper joinMapper;

  @Autowired
  private PasswordEncoder passwordEncoder;

  /**
   * 회원가입 > 이메일 중복여부 체크
   *
   * @param joinUserInVo 이메일 체크 IN VO
   * @return
   */
  @Override
  public int getEmailCheck(JoinUserInVo joinUserInVo) {
    return joinMapper.selectEmailCheck(joinUserInVo);
  }

  /**
   * 회원가입 > 사용자등록
   *
   * @param joinUserInVo 사용자등록 IN VO
   * @return
   */
  @Override
  public int addUser(JoinUserInVo joinUserInVo) {

    // 1. 이메일 체크
    int emailChkCnt = this.getEmailCheck(joinUserInVo);
    // 이메일 존재여부
    if (emailChkCnt > 0) {
      throw new CshMintBizException(ErrorCode.DUPLICATE_CHECK, "이메일");
    }

    // 생성자,수정자 시스템관리자(99999)로 설정
    joinUserInVo.setCreateUserSeq(99999);
    joinUserInVo.setUpdateUserSeq(99999);

    // 입력받은 비밀번호를 암호화(BCrypt 해시로 저장)
    String encodedPwd = passwordEncoder.encode(joinUserInVo.getPwd());
    // 암호화한 비밀번호를 재설정
    joinUserInVo.setPwd(encodedPwd);

    return joinMapper.insertUser(joinUserInVo);
  }
}
