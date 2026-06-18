package com.cshbk.cshmint.cmmn.join;

import com.cshbk.cshmint.cmmn.join.service.JoinService;
import com.cshbk.cshmint.cmmn.join.vo.in.JoinUserInVo;
import com.cshbk.cshmint.common.vo.out.ResultOutVo;
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
 * Project : cshmint > 회원가입 controller
 * Created by 한소라 [ 2026. 4. 26. 오후 5:05 ]
 * Description :
 * ==========================================
 */
@Slf4j
@RestController
@RequestMapping("/api/join")
public class JoinController {

  /**
   * 회원가입 서비스
   */
  @Autowired
  private JoinService joinService;

  /**
   * 회원가입 > 사용자 등록
   *
   * @param joinUserInVo 회원가입 회원등록정보
   * @return
   */
  @PostMapping("/addUser")
  @Operation(summary = "사용자정보 등록", description = "입력한 회원정보로 회원가입을 합니다.")
  public ResultOutVo<?> addUser(@Valid @RequestBody JoinUserInVo joinUserInVo) {
    log.info("===============1. 회원가입 컨트롤러 ==================");
    log.info("joinUserInVo={}", joinUserInVo);
    return ResultOutVo.success(joinService.addUser(joinUserInVo));
  }

}
