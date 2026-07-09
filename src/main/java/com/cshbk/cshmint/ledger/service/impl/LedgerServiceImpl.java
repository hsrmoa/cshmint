package com.cshbk.cshmint.ledger.service.impl;

import com.cshbk.cshmint.ledger.mapper.LedgerMapper;
import com.cshbk.cshmint.ledger.service.LedgerService;
import com.cshbk.cshmint.ledger.vo.in.LedgerListInVo;
import com.cshbk.cshmint.ledger.vo.out.LedgerListOutVo;
import com.cshbk.cshmint.ledger.vo.out.LedgerListRsltOutVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * ==========================================
 * Project : cshmint > 가계부 목록
 * Created by 한소라 [ 2026. 7. 2. 오전 8:28 ]
 * Description :
 * ==========================================
 */
@Slf4j
@Service
public class LedgerServiceImpl implements LedgerService {

  @Autowired
  private LedgerMapper ledgerListMapper;

  /**
   * 가계부 > 가계부목록 정보 조회
   * @param ledgerListInVo 가계부 조회 IN VO
   * @return LedgerListRsltOutVo
   */
  @Override
  public LedgerListRsltOutVo getLedgerList(LedgerListInVo ledgerListInVo) {

    List<LedgerListOutVo> ledgerList =  ledgerListMapper.selectLedgerList(ledgerListInVo);

    return LedgerListRsltOutVo.builder()
            .ledgerList(ledgerList)
            .build();
  }
}
