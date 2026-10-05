package com.cshbk.cshmint.ledger.vo.out;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * ==========================================
 * Project : cshmint > 가계부 목록 결과 정보
 * Created by 한소라 [ 2026. 7. 4. 오후 3:24 ]
 * Description :
 * ==========================================
 */
@Getter
@Setter
@ToString
public class LedgerOutVo {

    private Long ledgerSeq;      //  가계부 Seq
    private String ledgerNm;    // 가계부 목록
    private String ledgerYear;  //  가계부 연도
    private String delYn;
}
