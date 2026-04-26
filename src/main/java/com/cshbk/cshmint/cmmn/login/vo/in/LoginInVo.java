package com.cshbk.cshmint.cmmn.login.vo.in;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * ==========================================
 * Project : cshmint > 로그인 요청 VO
 * Created by 한소라 [ 2026. 4. 26. 오후 2:47 ]
 * Description :
 * ==========================================
 */
@Getter
@Setter
@ToString
public class LoginInVo{

    @NotBlank(message = "이메일 주소를 입력해주세요")
    @Schema(description = "이메일주소", required = true)
    private String email;

    @NotEmpty(message = "비밀번호를 입력해주세요.")
    @Schema(description = "비밀번호", required = true)
    private String password;
}
