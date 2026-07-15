package com.cshbk.cshmint.ledger.vo.in;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

/**
 * ==========================================
 * Project : cshmint > 가계부 등록 IN VO
 * Created by 한소라 [ 2026. 7. 11. 오후 5:05 ]
 * Description :
 * ==========================================
 */
@Getter
@Setter
@NoArgsConstructor
public class LedgerRegInVo {

   @Schema(description = "가계부정보")
   private LedgerInVo ledgerInVo;

   @Schema(description = "사용자 가계부 목록")
   private List<UserLedgerInVo> userLedgerInVoList;
}
