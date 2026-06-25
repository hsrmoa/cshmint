package com.cshbk.cshmint.mypage.service;
import com.cshbk.cshmint.common.vo.out.UserVo;
import com.cshbk.cshmint.mypage.vo.in.MypageInVo;

/**
 * ==========================================
 * Project : cshmint > 내정보 수정 서비스 인터페이스
 * Created by 한소라 [ 2026. 4. 26. 오후 5:17 ]
 * Description :
 * ==========================================
 */
public interface MypageService {

  /**
   * 내정보 수정 > 사용자정보 조회
   *
   * @param mypageInVo 사용자정보 조회 IN VO
   * @return
   */
  UserVo selectMypageUser(MypageInVo mypageInVo);

}
