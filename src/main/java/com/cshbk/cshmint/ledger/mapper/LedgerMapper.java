package com.cshbk.cshmint.ledger.mapper;

import com.cshbk.cshmint.ledger.vo.in.LedgerListInVo;
import com.cshbk.cshmint.ledger.vo.out.LedgerListOutVo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * ==========================================
 * Project : cshmint > 가계부 목록 Mapper
 * Created by 한소라 [ 2026. 7. 2. 오전 8:33 ]
 * Description :
 * ==========================================
 */
@Mapper
public interface LedgerMapper {

  /**
   * 가계부 목록 > 가계부 정보 조회
   * @param ledgerListInVo
   * @return
   */
  List<LedgerListOutVo> selectLedgerList(LedgerListInVo ledgerListInVo);
}
