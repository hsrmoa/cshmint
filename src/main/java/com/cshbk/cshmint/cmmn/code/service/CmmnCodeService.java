package com.cshbk.cshmint.cmmn.code.service;

import com.cshbk.cshmint.cmmn.code.vo.in.CmmnCodeInVo;
import com.cshbk.cshmint.cmmn.code.vo.out.CmmnCodeOutVo;

import java.util.List;

/**
 * ==========================================
 * Project : cshmint > 공통코드 Service
 * Created by 한소라 [ 2026. 9. 7. 오전 7:52 ]
 * Description :
 * ==========================================
 */
public interface CmmnCodeService {

    List<CmmnCodeOutVo> getCmmnCodeList(CmmnCodeInVo inVo);
}
