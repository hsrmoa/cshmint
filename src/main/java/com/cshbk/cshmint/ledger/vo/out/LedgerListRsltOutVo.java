package com.cshbk.cshmint.ledger.vo.out;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

/**
 * ==========================================
 * Project : cshmint > 가계부 조회 결과 정보
 * Created by 한소라 [ 2026. 7. 4. 오후 3:36 ]
 * Description :
 * ==========================================
 */
@Builder
@Getter
@Setter
@ToString
public class LedgerListRsltOutVo {

  // 가계부 정보
  private LedgerListOutVo ledgerInVo;

  // 사용자정보
  private List<UserLedgerOutVo> userLedgerInVoList;
}
