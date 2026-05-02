package com.cshbk.cshmint.cmmn.login;

import com.cshbk.cshmint.cmmn.login.service.LoginService;
import com.cshbk.cshmint.cmmn.login.vo.in.LoginInVo;
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
 * Project : cshmint > 로그인 Controller
 * Created by 한소라 [ 2026. 4. 26. 오후 2:40 ]
 * Description :
 * ==========================================
 */
@Slf4j
@RestController
@RequestMapping("/api/login")
public class LoginController {

  @Autowired
  private LoginService loginService;

  /**
   * 로그인  > 로그인 실행
   *
   * @return
   */
  @PostMapping("/loginAction")
  @Operation(summary = "로그인실행", description = "이메일과 비밀번호로 로그인합니다.")
  public ResultOutVo<?> login(@Valid @RequestBody LoginInVo loginInVo) {
    return ResultOutVo.success(loginService.loginAction(loginInVo));
  }
}
