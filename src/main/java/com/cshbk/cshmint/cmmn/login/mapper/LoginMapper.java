package com.cshbk.cshmint.cmmn.login.mapper;

import com.cshbk.cshmint.cmmn.login.vo.in.LoginInVo;
import com.cshbk.cshmint.common.vo.out.UserVo;
import org.apache.ibatis.annotations.Mapper;

/**
 * ==========================================
 * Project : cshmint > 로그인 Mapper
 * Created by 한소라 [ 2026. 4. 29. 오후 12:24 ]
 * Description :
 * ==========================================
 */
@Mapper
public interface LoginMapper {

  /**
   * 로그인 >. 사용자 정보 조회
   * @param loginInVo  로그인 IN VO
   * @return
   */
  UserVo selectUser(LoginInVo loginInVo);
}
