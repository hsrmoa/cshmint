package com.cshbk.cshmint.ledger.vo.out;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * ==========================================
 * Project : cshmint > 사용자 정보
 * Created by 한소라 [ 2026. 7. 18. 오후 3:48 ]
 * Description :
 * ==========================================
 */
@Getter
@Setter
@ToString
public class UserLedgerOutVo  {

  @Schema(description = "사용자SEQ")
  private Long userSeq;

  @Schema(description = "사용자이름")
  private String userNm;

  @Schema(description = "가계부SEQ")
  private Long ledgerSeq;

  @Schema(description = "가계부권한")
  private String ledgerAuth;

  @Schema(description = "권한종료일자")
  private String authExitDate;

  @Schema(description = "초대승인여부")
  private String inviteAgreeYn;

  @Schema(description = "초대승인여부")
  private String showOnedayYn;

  @Schema(description = "이메일주소")
  private String email;
}
