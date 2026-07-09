package com.cshbk.cshmint.ledger.service;

import com.cshbk.cshmint.ledger.vo.in.LedgerListInVo;
import com.cshbk.cshmint.ledger.vo.out.LedgerListRsltOutVo;

/**
 * ==========================================
 * Project : cshmint > 가계부 목록 서비스
 * Created by 한소라 [ 2026. 7. 2. 오전 8:27 ]
 * Description :
 * ==========================================
 */
public interface LedgerService {

  /**
   * 가계부목록 정보 조회
   * @param ledgerListInVo 가계부 조회 IN VO
   * @return LedgerListRsltOutVo 가계부 결과정보
   */
  public LedgerListRsltOutVo getLedgerList(LedgerListInVo ledgerListInVo);
}
