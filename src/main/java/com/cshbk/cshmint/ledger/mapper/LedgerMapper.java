package com.cshbk.cshmint.ledger.mapper;

import com.cshbk.cshmint.ledger.vo.in.LedgerInVo;
import com.cshbk.cshmint.ledger.vo.in.LedgerListInVo;
import com.cshbk.cshmint.ledger.vo.in.UserLedgerInVo;
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
   * @param ledgerListInVo 가계부 목록 조회조건
   * @return List<LedgerListOutVo> 가계부 목록
   */
  List<LedgerListOutVo> selectLedgerList(LedgerListInVo ledgerListInVo);


  /**
   * 가계부 등록 > 가계부 정보 등록
   * @param ledgerInVo 가계부 저장정보
   * @return  int 저장개수
   */
  int insertLedger(LedgerInVo ledgerInVo);

  /**
   * 가계부 등록 > 이메일 주소로 USER_SEQ 정보 조회
   * @param userLedgerInVo 사용자 가계부 정보
   * @return
   */
  Long selectUserSeq(UserLedgerInVo userLedgerInVo);


  /**
   * 가계부 등록 >. 초대 정보 등록
   * @param userLedgerInVo 사용자 가계부 정보
   * @return
   */
  int insertUserLedger(UserLedgerInVo userLedgerInVo);
}
