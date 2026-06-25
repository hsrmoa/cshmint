package com.cshbk.cshmint.mypage.mapper;
import org.apache.ibatis.annotations.Mapper;
import com.cshbk.cshmint.mypage.vo.in.MypageInVo;


/**
 * ==========================================
 * Project : cshmint > 내정보 수정 Repository
 * Created by 박수연  [ 2026. 5. 25. 오후 3:17 ]
 * Description :
 * ==========================================
 */
@Mapper
public interface MypageMapper {

 /**
  * 내정보 수정 > 사용자정보 조회
    * @param mypageInVo 사용자정보 조회 IN VO
  */
 int selectMypageUser(MypageInVo mypageInVo);

}
