package com.cshbk.cshmint.mypage.service.impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cshbk.cshmint.common.vo.out.UserVo;
import com.cshbk.cshmint.mypage.mapper.MypageMapper;
import com.cshbk.cshmint.mypage.service.MypageService;
import com.cshbk.cshmint.mypage.vo.in.MypageInVo;

import lombok.extern.slf4j.Slf4j;

/**
 * ==========================================
 * Project : cshmint > 내정보 수정 서비스 impl
 * Created by 박수연 [ 2026. 5. 25. 오후 3:24 ]
 * Description :
 * ==========================================
 */
@Slf4j
@Service
public class MypageServiceImpl implements MypageService {

  @Autowired
  private MypageMapper mypageMapper;

  @Autowired
  private PasswordEncoder passwordEncoder;


  /**
   * 내정보 수정 > 사용자정보 조회
   * @param mypageInVo  사용자정보 조회 IN VO
   * @return
   */
  @Override
  public UserVo selectMypageUser(MypageInVo mypageInVo) {
    return mypageMapper.selectMypageUser(mypageInVo);
  }


}
