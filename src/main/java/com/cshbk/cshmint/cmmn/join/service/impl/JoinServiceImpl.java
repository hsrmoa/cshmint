package com.cshbk.cshmint.cmmn.join.service.impl;

import com.cshbk.cshmint.cmmn.join.mapper.JoinMapper;
import com.cshbk.cshmint.cmmn.join.service.JoinService;
import com.cshbk.cshmint.cmmn.join.vo.in.JoinEmailChkInVo;
import com.cshbk.cshmint.cmmn.join.vo.in.JoinUserInVo;
import org.springframework.beans.factory.annotation.Autowired;
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

  /**
   * 회원가입 > 이메일 중복여부 체크
   *
   * @param joinEmailChkInVo 이메일 체크 IN VO
   * @return
   */
  @Override
  public int getEmailCheck(JoinEmailChkInVo joinEmailChkInVo) {
    return joinMapper.selectEmailCheck(joinEmailChkInVo);
  }

  /**
   * 회원가입 > 사용자등록
   *
   * @param joinUserInVo 사용자등록 IN VO
   * @return
   */
  @Override
  public int addUser(JoinUserInVo joinUserInVo) {
      // 생성자,수정자 시스템관리자(999999)로 설정
      joinUserInVo.setCreateUserSeq(999999);
      joinUserInVo.setUpdateUserSeq(999999);

      return joinMapper.insertUser(joinUserInVo);
  }
}
