package com.cshbk.cshmint.cmmn.code;

import com.cshbk.cshmint.cmmn.code.service.CmmnCodeService;
import com.cshbk.cshmint.cmmn.code.vo.in.CmmnCodeInVo;
import com.cshbk.cshmint.cmmn.code.vo.out.CmmnCodeOutVo;
import com.cshbk.cshmint.common.vo.out.ResultOutVo;
import io.swagger.v3.oas.annotations.Operation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * ==========================================
 * Project : cshmint > 공통코드 목록 조회 Controller
 * Created by 한소라 [ 2026. 9. 6. 오후 8:08 ]
 * Description :
 * ==========================================
 */
@Slf4j
@RestController
@RequestMapping("/api/cmmn/code")
public class CmmnCodeController {


  @Autowired
  private CmmnCodeService cmmnCodeService;


  @PostMapping("/codeList")
  @Operation(summary = "공통코드 목록 조회", description = "공통코드 목록을 조회한다")
  public ResultOutVo<?> getCmmnCodeList(@RequestBody CmmnCodeInVo cmmnCodeInVo) {
    List<CmmnCodeOutVo> list = cmmnCodeService.getCmmnCodeList(cmmnCodeInVo);
    return ResultOutVo.success(list);
  }

}
