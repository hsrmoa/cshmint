package com.cshbk.cshmint.ledger.vo.in;

import com.cshbk.cshmint.common.vo.in.CommonInVo;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

/**
 * ==========================================
 * Project : cshmint > 가계부 목록 조회 IN Vo
 * Created by 한소라 [ 2026. 7. 4. 오후 3:13 ]
 * Description :
 * ==========================================
 */
@Getter
@Setter
public class LedgerListInVo extends CommonInVo {

  @NotNull(message = "사용자 SEQ를 입력해주세요")
  @Schema(description = "사용자 SEQ", required = true)
  private Integer userSeq;

  @Schema(description = "정렬순서")
  private String orderValue;

}
