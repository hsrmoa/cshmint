package com.cshbk.cshmint.ledger.ledgerList;

import com.cshbk.cshmint.common.vo.out.ResultOutVo;
import com.cshbk.cshmint.ledger.ledgerList.service.LedgerListService;
import com.cshbk.cshmint.ledger.ledgerList.vo.in.LedgerListInVo;
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
@RequestMapping("/api/ledgerList")
public class LedgerListController {

  @Autowired
  private LedgerListService ledgerListService;

  @PostMapping("/list")
  @Operation(summary = "가계부목록조회", description = "로그인한 사용자의 가계부목록조회")
  public ResultOutVo<?> getLedgerList(@RequestBody @Valid LedgerListInVo ledgerListInVo) {

    return ResultOutVo.success(ledgerListService.getLedgerList(ledgerListInVo));
  }

}
