package com.cshbk.cshmint.cmmn.join.vo.in;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * ==========================================
 * Project : cshmint > 회원가입 아이디 존재여부 체크
 * Created by 한소라 [ 2026. 4. 26. 오후 5:11 ]
 * Description :
 * ==========================================
 */
@Getter
@Setter
@ToString
public class JoinEmailChkInVo {

  @NotEmpty(message = "이메일 주소를 입력해주세요")
  @Schema(description = "이메일주소" , required = true)
  private String email;
}
