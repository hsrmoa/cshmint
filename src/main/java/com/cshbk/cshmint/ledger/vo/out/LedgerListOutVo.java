package com.cshbk.cshmint.ledger.vo.out;

import com.cshbk.cshmint.common.vo.in.CommonInVo;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

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
public class LedgerListOutVo extends CommonInVo {

    private int ledgerSeq;      //  가계부 Seq
    private String ledgerNm;    // 가계부 목록
    private String ledgerYear;  //  가계부 연도
    private int userSeq;        // 사용자 Seq
    private String userNm;      // 사용자명
    private String masterYn;  // 관리자여부
    private Date authExitDate;  // 권한종료일자
    private String inviteAgreeYn;   // 초대승인여부
    private  String ledgerAuth; // 가계부 권한
    private String useYn;      // 사용여부
    private String showOnedayYn;    // 하루만 보기여부
    private String createDate;      // 생성일자
}
