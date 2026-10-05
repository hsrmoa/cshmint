package com.cshbk.cshmint.ledger;

import com.cshbk.cshmint.common.vo.out.ResultOutVo;
import com.cshbk.cshmint.ledger.service.LedgerService;
import com.cshbk.cshmint.ledger.vo.in.LedgerListInVo;
import com.cshbk.cshmint.ledger.vo.in.LedgerRegInVo;
import com.cshbk.cshmint.ledger.vo.out.LedgerListRsltOutVo;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * ==========================================
 * Project : cshmint > 가계부목록
 * Created by 한소라 [ 2026. 7. 1. 오전 8:28 ]
 * Description : 가계부 목록을 조회해오는 Controller
 * ==========================================
 */
@Slf4j
@RestController
@RequestMapping("/api/ledger")
public class LedgerController {

  @Autowired
  private LedgerService ledgerListService;

  /**
   * 가계부목록 > 가계부 목록 조회
   *
   * @param ledgerListInVo 가계부 목록 조건 IN VO
   * @return ResultOutVo
   */
  @PostMapping("/list")
  @Operation(summary = "가계부목록조회", description = "로그인한 사용자의 가계부목록조회")
  public ResultOutVo<?> getLedgerList(@RequestBody @Valid LedgerListInVo ledgerListInVo) {
    List<LedgerListRsltOutVo> result = ledgerListService.getLedgerList(ledgerListInVo);

    log.info("가계부 목록 조회 결과={}", result);

    return ResultOutVo.success(result);
  }


  /**
   * 가계부목록 > 가계부 상세 조회
   *
   * @param inVo 가계부 SEQ
   * @return ResultOutVo
   */
  @PostMapping("/detail")
  @Operation(summary = "가계부목록조회", description = "로그인한 사용자의 가계부목록조회")
  public ResultOutVo<?> getLedgerDetail(@RequestBody LedgerListInVo inVo) {
    return ResultOutVo.success(ledgerListService.getLedgerDetail(inVo));
  }

  /**
   * 가계부 등록
   *
   * @param ledgerRegInVo 가계부 등록정보
   * @return ResultOutVo
   */
  @PostMapping("/insertLedger")
  @Operation(summary = "가계부등록", description = "가계부를 등록  ")
  public ResultOutVo<?> insertLedger(@RequestBody @Valid LedgerRegInVo ledgerRegInVo) {
    return ResultOutVo.success(ledgerListService.insertLedger(ledgerRegInVo));
  }

  /**
   * 가계부 수정
   *
   * @param ledgerRegInVo 가계부 수정정보
   * @return ResultOutVo
   */
  @PutMapping("/updateLedger")
  @Operation(summary = "가계부수정", description = "가계부를 수정")
  public ResultOutVo<?> updateLedger(@RequestBody @Valid LedgerRegInVo ledgerRegInVo) {
    return ResultOutVo.success(ledgerListService.updateLeger(ledgerRegInVo));
  }

  /**
   * 가계부 삭제
   *
   * @param ledgerRegInVo 가계부 삭제정보
   * @return ResultOutVo
   */
  @DeleteMapping("/deleteLedger")
  @Operation(summary = "가계부삭제", description = "가계부를 삭제")
  public ResultOutVo<?> deleteLedger(@RequestBody @Valid LedgerRegInVo ledgerRegInVo) {
    return ResultOutVo.success(ledgerListService.deleteLedger(ledgerRegInVo));
  }



}
