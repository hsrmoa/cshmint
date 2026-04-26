package com.cshbk.cshmint.common.vo.in;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * ==========================================
 * Project : cshmint >  공통 In Vo 정보
 * Created by 한소라 [ 2026. 4. 26. 오후 2:49 ]
 * Description :
 * ==========================================
 */
@Getter
@Setter
@ToString
public class CommonInVo {


  @Schema(description = "생성자 UserSeq")
  private Integer createUserSeq;

  @Schema(description = "수정자 UserSeq")
  private Integer updateUserSeq;
}
