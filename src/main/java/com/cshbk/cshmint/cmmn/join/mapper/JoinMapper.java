package com.cshbk.cshmint.cmmn.join.mapper;

import com.cshbk.cshmint.cmmn.join.vo.in.JoinUserInVo;
import org.apache.ibatis.annotations.Mapper;

/**
 * ==========================================
 * Project : cshmint > 회원가입 Repository
 * Created by 한소라 [ 2026. 4. 26. 오후 5:22 ]
 * Description :
 * ==========================================
 */
@Mapper
public interface JoinMapper {

 /**
  * 회원가입 > 이메일 중복여부 체크
  * @param joinUserInVo 이메일 중복 체크 IN VO
  * @return
  */
 int selectEmailCheck(JoinUserInVo joinUserInVo);

 /**
  * 회원가입 > 사용자등록
  * @param joinUserInVo 사용자 등록 IN VO
  * @return
  */
 int insertUser(JoinUserInVo joinUserInVo);

}
