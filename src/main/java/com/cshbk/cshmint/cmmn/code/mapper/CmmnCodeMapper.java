package com.cshbk.cshmint.cmmn.code.mapper;

import com.cshbk.cshmint.cmmn.code.vo.in.CmmnCodeInVo;
import com.cshbk.cshmint.cmmn.code.vo.out.CmmnCodeOutVo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * ==========================================
 * Project : cshmint > 공통코드 Mapper
 * Created by 한소라 [ 2026. 9. 7. 오전 8:13 ]
 * Description :
 * ==========================================
 */
@Mapper
public interface CmmnCodeMapper {

  /**
   * 공통코드 > 공통코드 목록 조회
   * @param cmmnCodeInVo 코드 조회 IN VO
   * @return
   */
  List<CmmnCodeOutVo> selectCmmnCodeList(CmmnCodeInVo cmmnCodeInVo);
}
