package com.cshbk.cshmint.ledger.vo.out;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * ==========================================
 * Project : cshmint > 가계부 상세 조회 OUT VO
 * Created by 한소라 [ 2026. 7. 19. 오후 6:15 ]
 * Description :
 * ==========================================
 */
@Builder
@Getter
@Setter
public class LedgerDetailOutVo {

  private LedgerOutVo ledger;

  private List<UserLedgerOutVo> userLedgerList;
}
