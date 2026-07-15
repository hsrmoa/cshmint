package com.cshbk.cshmint.ledger.vo.in;

import com.cshbk.cshmint.common.vo.in.CommonInVo;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * ==========================================
 * Project : cshmint >  가계부 저장 IN VO
 * Created by 한소라 [ 2026. 7. 11. 오후 4:25 ]
 * Description :
 * ==========================================
 */
@Getter
@Setter
@NoArgsConstructor
public class LedgerInVo extends CommonInVo {

 @Schema(description = "가계부SEQ")
 private int ledgerSeq;

 @Schema(description = "가계부연도")
 private String ledgerYear;

 @NotEmpty(message = "가계부명을 입력해주세요")
 @Schema(description = "가계부명")
 private String ledgerNm;

 @NotEmpty(message = "삭제여부를 입력해주세요")
 @Schema(description = "삭제여부")
 private String delYn;
}
