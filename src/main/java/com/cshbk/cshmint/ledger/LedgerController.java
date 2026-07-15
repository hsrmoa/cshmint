package com.cshbk.cshmint.ledger;

import com.cshbk.cshmint.common.vo.out.ResultOutVo;
import com.cshbk.cshmint.ledger.service.LedgerService;
import com.cshbk.cshmint.ledger.vo.in.LedgerListInVo;
import com.cshbk.cshmint.ledger.vo.in.LedgerRegInVo;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
   * @param ledgerListInVo 가계부 목록 조건 IN VO
   * @return ResultOutVo
   */
  @PostMapping("/list")
  @Operation(summary = "가계부목록조회", description = "로그인한 사용자의 가계부목록조회")
  public ResultOutVo<?> getLedgerList(@RequestBody @Valid LedgerListInVo ledgerListInVo) {
    return ResultOutVo.success(ledgerListService.getLedgerList(ledgerListInVo));
  }

  /**
   * 가계부 등록
   * @param ledgerRegInVo 가계부 등록정보
   * @return  ResultOutVo
   */
  @PostMapping("/insertLedger")
  @Operation(summary = "가계부등록", description = "가계부를 등록  ")
  public ResultOutVo<?> insertLedger(@RequestBody @Valid LedgerRegInVo ledgerRegInVo) {
    return ResultOutVo.success(ledgerListService.insertLedger(ledgerRegInVo));
  }
}
