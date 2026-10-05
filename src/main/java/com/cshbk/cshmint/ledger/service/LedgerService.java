package com.cshbk.cshmint.ledger.service;

import com.cshbk.cshmint.ledger.vo.in.LedgerListInVo;
import com.cshbk.cshmint.ledger.vo.in.LedgerRegInVo;
import com.cshbk.cshmint.ledger.vo.out.LedgerDetailOutVo;
import com.cshbk.cshmint.ledger.vo.out.LedgerListRsltOutVo;

import java.util.List;

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
  List<LedgerListRsltOutVo> getLedgerList(LedgerListInVo ledgerListInVo);


  /**
   * 가계부 목록 > 상세 조회
   * @param inVo 가계부 SEQ
   * @return LedgerDetailOutVo
   */
  LedgerDetailOutVo getLedgerDetail(LedgerListInVo inVo);

  /**
   * 가계부 등록
   * @param ledgerRegInVo 가계부 등록정보
   * @return  int 등록개수
   */
  int insertLedger(LedgerRegInVo ledgerRegInVo);

  /**
   * 가계부 수정
   * @param ledgerRegInVo 가계부 수정정보
   * @return  int 수정개수
   */
  int updateLeger(LedgerRegInVo ledgerRegInVo);


  /**
   * 가계부 삭제
   * @param ledgerRegInVo 가계부 삭제정보
   * @return  int 삭제개수
   */
  int deleteLedger(LedgerRegInVo ledgerRegInVo);

}
