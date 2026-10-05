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
import com.cshbk.cshmint.ledger.vo.out.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
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
  @Autowired
  private LedgerMapper ledgerMapper;

  /**
   * 가계부 > 가계부목록 정보 조회
   *
   * @param ledgerListInVo 가계부 조회 IN VO
   * @return LedgerListRsltOutVo
   */
  @Override
  public List<LedgerListRsltOutVo> getLedgerList(LedgerListInVo ledgerListInVo) {
    List<LedgerListRsltOutVo> ledgerListRsltList = new ArrayList<LedgerListRsltOutVo>();
    // 가계부 목록
    List<LedgerListOutVo> ledgerList = ledgerListMapper.selectLedgerList(ledgerListInVo);

    for (LedgerListOutVo ledgerListOutVo : ledgerList) {

      // 가계부 사용자 목록 조회
      List<UserLedgerOutVo> userLedgerList = new ArrayList<UserLedgerOutVo>();
      UserLedgerInVo userLedgerInVo = UserLedgerInVo.builder()
              .ledgerSeq(ledgerListOutVo.getLedgerSeq())
              .build();
      userLedgerList = ledgerListMapper.selectInviteUserList(userLedgerInVo);
      ledgerListRsltList.add(LedgerListRsltOutVo.builder()
              .ledgerInVo(ledgerListOutVo)
              .userLedgerInVoList(userLedgerList)
              .build()
      );
    }
    return ledgerListRsltList;
  }

  /**
   * 가계부 목록 > 상세 조회
   * @param inVo 가계부 SEQ
   * @return LedgerDetailOutVo
   */
  public LedgerDetailOutVo getLedgerDetail(LedgerListInVo inVo){
    LedgerOutVo ledgerVo = ledgerMapper.selectLedgerDetail(inVo);

    UserLedgerInVo userLedgerInVo = UserLedgerInVo.builder()
            .ledgerSeq(inVo.getLedgerSeq())
            .build();
    List<UserLedgerOutVo> userLedgerList = ledgerMapper.selectInviteUserList(userLedgerInVo);

    return LedgerDetailOutVo.builder()
            .ledger(ledgerVo)
            .userLedgerList(userLedgerList)
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
    log.info("======SessionUtils.getUserSeq() :: {}", SessionUtils.getUserSeq());
    int result = 0;
    LedgerInVo ledgerInVo = ledgerRegInVo.getLedgerInVo();
    ledgerInVo.setUpdateUserSeq(Integer.parseInt(SessionUtils.getUserSeq().toString()));
    ledgerInVo.setCreateUserSeq(Integer.parseInt(SessionUtils.getUserSeq().toString()));

    // 1. 가계부 등록
    Long ledgerSeq = ledgerListMapper.insertLedger(ledgerInVo);
    if (ledgerSeq < 1) {
      throw new CshMintBizException(ErrorCode.CMM_ERROR_001, new Object[]{"가계부"});
    }
    // 2. 가계부 사용자 등록
    insertUserLedgerList(ledgerRegInVo, ledgerSeq);

    result++;
    return result;
  }

  /**
   * 가계부 사용자 정보 등록
   */
  private void insertUserLedgerList(LedgerRegInVo ledgerRegInVo, Long ledgerSeq) {

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
      // userSeq가 null일때는 초대하는 사용자
      if (userLedgerInVo.getUserSeq() == null) {
        Long userSeq = ledgerListMapper.selectUserSeq(userLedgerInVo);
        if (userSeq == null) {
          throw new CshMintBizException(ErrorCode.LEDGER_ERROR_001, new Object[]{userLedgerInVo.getEmail()});
        }
        userLedgerInVo.setUserSeq(userSeq);
        userLedgerInVo.setMasterYn("N");
        userLedgerInVo.setInviteAgreeYn("N");
        userLedgerInVo.setAuthExitDate("99991231");  // 하루만보기시는 초대승인일자기준~ 하루!
      }
      // 가계부 사용자  신규 등록
      int userRegCnt = ledgerListMapper.insertUserLedger(userLedgerInVo);
      if (userRegCnt <= 0) {
        throw new CshMintBizException(ErrorCode.CMM_ERROR_001, new Object[]{"가계부 사용자"});
      }
    }
  }

  /**
   * 가계부 수정
   * @param ledgerRegInVo 가계부 수정정보
   * @return  int 수정개수
   */
  @Transactional(rollbackFor = Exception.class)
  @Override
  public int updateLeger(LedgerRegInVo ledgerRegInVo){
    int result = 0;
    LedgerInVo ledgerInVo = ledgerRegInVo.getLedgerInVo();
    ledgerInVo.setUpdateUserSeq(Integer.parseInt(SessionUtils.getUserSeq().toString()));
    ledgerInVo.setCreateUserSeq(Integer.parseInt(SessionUtils.getUserSeq().toString()));

    // 1. 가계부 수정
    int updateCnt = ledgerListMapper.updateLedger(ledgerInVo);
    if (updateCnt < 1) {
      throw new CshMintBizException(ErrorCode.CMM_ERROR_001, new Object[]{"가계부"});
    }
    // 2 가계부 사용자 삭제
    int delCnt = ledgerMapper.deleteUserLedger(ledgerInVo);
    if(delCnt < 1) {
      throw new CshMintBizException(ErrorCode.CMM_ERROR_001, new Object[]{"가계부 사용자"});
    }

    // 3. 가계부 사용자 정보 등록
    insertUserLedgerList(ledgerRegInVo, ledgerInVo.getLedgerSeq());

    result++;

    return result;
  }
  /**
   * 가계부 삭제
   * @param ledgerRegInVo 가계부 삭제정보
   * @return  int 삭제개수
   */
  @Transactional(rollbackFor = Exception.class)
  @Override
  public int deleteLedger(LedgerRegInVo ledgerRegInVo){
    int result = 0;
    LedgerInVo ledgerInVo = ledgerRegInVo.getLedgerInVo();
    ledgerInVo.setUpdateUserSeq(Integer.parseInt(SessionUtils.getUserSeq().toString()));
    ledgerInVo.setCreateUserSeq(Integer.parseInt(SessionUtils.getUserSeq().toString()));

    // 1.가계부 사용자 정보 먼저 삭제
    ledgerMapper.deleteUserLedger(ledgerInVo);

    // 2.가계부 삭제
    ledgerMapper.deleteLedger(ledgerInVo);

    result++;
    return result;
  }

}
