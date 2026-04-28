package com.cshbk.cshmint.cmmn.join.vo.in;

import com.cshbk.cshmint.common.vo.in.CommonInVo;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

/**
 * ==========================================
 * Project : cshmint >  회원가입 사용자정보
 * Created by 한소라 [ 2026. 4. 27. 오전 8:23 ]
 * Description :
 * ==========================================
 */
@Getter
@Setter
public class JoinUserInVo extends CommonInVo {

  @NotEmpty(message = "이메일주소를 입력해주세요")
  @Schema(description = "이메일주소", required = true)
  private String email;

  @NotEmpty(message = "비밀번호를 입력해주세요")
  @Schema(description = "비밀번호", required = true)
  private String pwd;

  @NotEmpty(message = "사용자이름을 입력해주세요")
  @Schema(description = "사용자이름", required = true)
  private String userNm;

  @Schema(description = "사용자이미지")
  private String proImg;
}
