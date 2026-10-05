package com.cshbk.cshmint.cmmn.code.service.impl;

import com.cshbk.cshmint.cmmn.code.mapper.CmmnCodeMapper;
import com.cshbk.cshmint.cmmn.code.service.CmmnCodeService;
import com.cshbk.cshmint.cmmn.code.vo.in.CmmnCodeInVo;
import com.cshbk.cshmint.cmmn.code.vo.out.CmmnCodeOutVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * ==========================================
 * Project : cshmint > 공통코드 Service Impl
 * Created by 한소라 [ 2026. 9. 7. 오전 8:01 ]
 * Description :
 * ==========================================
 */
@Service
public class CmmnCodeServiceImpl implements CmmnCodeService {

 @Autowired
 private CmmnCodeMapper cmmnCodeMapper;

 /**
  * 공통코드 > 공통코드 목록 조회
  * @param cmmnCodeInVo 코드 In Vo
  * @return
  */
 @Override
 public List<CmmnCodeOutVo> getCmmnCodeList(CmmnCodeInVo cmmnCodeInVo) {
  return cmmnCodeMapper.selectCmmnCodeList(cmmnCodeInVo);
 }
}
