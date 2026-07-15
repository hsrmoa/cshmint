package com.cshbk.cshmint.ledger.service.impl;

import com.cshbk.cshmint.common.enums.ErrorCode;
import com.cshbk.cshmint.common.exception.CshMintBizException;
import com.cshbk.cshmint.common.utils.SessionUtils;
import com.cshbk.cshmint.ledger.mapper.LedgerMapper;
import com.cshbk.cshmint.ledger.service.LedgerService;
import com.cshbk.cshmint.ledger.vo.in.LedgerInVo;
import com.cshbk.cshmint.ledger.vo.in.LedgerListInVo;
import com.cshbk.cshmint.ledger.vo.in.LedgerRegInVo;
import com.cshbk.cshmint.ledger.vo.in.UserLedgerInVo;
import com.cshbk.cshmint.ledger.vo.out.LedgerListOutVo;
import com.cshbk.cshmint.ledger.vo.out.LedgerListRsltOutVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

/**
 * ==========================================
 * Project : cshmint > 가계부 목록
 * Created by 한소라 [ 2026. 7. 2. 오전 8:28 ]
 * Description :
 * ==========================================
 */
@Slf4j
@Service
public class LedgerServiceImpl implements LedgerService {

  @Autowired
  private LedgerMapper ledgerListMapper;

  /**
   * 가계부 > 가계부목록 정보 조회
   *
   * @param ledgerListInVo 가계부 조회 IN VO
   * @return LedgerListRsltOutVo
   */
  @Override
  public LedgerListRsltOutVo getLedgerList(LedgerListInVo ledgerListInVo) {

    List<LedgerListOutVo> ledgerList = ledgerListMapper.selectLedgerList(ledgerListInVo);

    return LedgerListRsltOutVo.builder()
            .ledgerList(ledgerList)
            .build();
  }

  /**
   * 가계부 등록
   *
   * @param ledgerRegInVo 가계부 등록정보
   * @return int 등록개수
   */
  @Transactional(rollbackFor = Exception.class)
  @Override
  public int insertLedger(LedgerRegInVo ledgerRegInVo) {
    log.info("======SessionUtils.getUserSeq() :: {}",SessionUtils.getUserSeq());
    int result = 0;
    LedgerInVo ledgerInVo = ledgerRegInVo.getLedgerInVo();
    ledgerInVo.setUpdateUserSeq(Integer.parseInt(SessionUtils.getUserSeq().toString()));
    ledgerInVo.setCreateUserSeq(Integer.parseInt(SessionUtils.getUserSeq().toString()));

    // 1. 가계부 정보 등록
    int ledgerSeq = ledgerListMapper.insertLedger(ledgerInVo);
    if(ledgerSeq <  1) {
      throw new CshMintBizException(ErrorCode.CMM_ERROR_001, new Object[]{"가계부"});
    }
    // 2. 가계부 사용자 목록
    List<UserLedgerInVo> userLedgerSaveList = ledgerRegInVo.getUserLedgerInVoList();

    // 2-1 가계부 사용자 목록이 비어있을때 = 소유자 사용자 정보 추가
    UserLedgerInVo userLedgerSaveInVo = UserLedgerInVo.builder()
            .userSeq(SessionUtils.getUserSeq())
            .ledgerAuth("U")
            .authExitDate("99991231")
            .masterYn("Y")
            .inviteAgreeYn("Y")
            .showOnedayYn("N")
            .email(SessionUtils.getEmail())
            .build();
    userLedgerSaveInVo.setCreateUserSeq(Integer.parseInt(SessionUtils.getUserSeq().toString()));
    userLedgerSaveInVo.setUpdateUserSeq(Integer.parseInt(SessionUtils.getUserSeq().toString()));
    userLedgerSaveList.add(userLedgerSaveInVo);

    // 3. 가계부사용자 등록
    for (UserLedgerInVo userLedgerInVo : userLedgerSaveList) {
      userLedgerInVo.setLedgerSeq(ledgerSeq);
      userLedgerInVo.setUseYn("Y");
      if (userLedgerInVo.getUserSeq() == null) {
        Long userSeq = ledgerListMapper.selectUserSeq(userLedgerInVo);
        if (userSeq == null) {
          throw new CshMintBizException(ErrorCode.LEDGER_ERROR_001, new Object[]{userLedgerInVo.getEmail()});
        }
        userLedgerInVo.setUserSeq(userSeq);
        userLedgerInVo.setMasterYn("N");
        userLedgerInVo.setInviteAgreeYn("N");
        // 하루만 보기를 체크헀을 때는 내일까지 만료일자
        if(userLedgerInVo.getShowOnedayYn().equals("Y")) {
          String yesterday = LocalDate.now()
                  .minusDays(1)
                  .format(DateTimeFormatter.ofPattern("yyyyMMdd"));
          userLedgerInVo.setAuthExitDate(yesterday);
        }
      }
      int userRegCnt = ledgerListMapper.insertUserLedger(userLedgerInVo);
      if(userRegCnt <= 0) {
          throw new CshMintBizException(ErrorCode.CMM_ERROR_001, new Object[]{"가계부 사용자"});
      }
    }
    result++;
    return result;
  }


}
