package com.cshbk.cshmint.ledger.vo.in;

import com.cshbk.cshmint.common.vo.in.CommonInVo;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/**
 * ==========================================
 * Project : cshmint > 사용자 가계부 저장 IN VO
 * Created by 한소라 [ 2026. 7. 11. 오후 4:36 ]
 * Description :
 * ==========================================
 */
@Builder
@Getter
@Setter
public class UserLedgerInVo extends CommonInVo {

  @Schema(description = "사용자SEQ")
  private Long userSeq;

  @Schema(description = "가계부SEQ")
  private int ledgerSeq;

  @Schema(description = "가계부권한")
  private String ledgerAuth;

  @Schema(description = "권한종료일자")
  private String authExitDate;

  @Schema(description = "사용여부")
  private String useYn;

  @Schema(description = "마스터여부")
  private String masterYn;

  @Schema(description = "초대승인여부")
  private String inviteAgreeYn;

  @Schema(description = "초대승인여부")
  private String showOnedayYn;

  @Schema(description = "이메일주소")
  private String email;
}
