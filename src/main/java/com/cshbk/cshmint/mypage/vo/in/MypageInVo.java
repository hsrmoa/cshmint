package com.cshbk.cshmint.mypage.vo.in;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * ==========================================
 * Project : cshmint >  내정보 수정 In Vo 정보
 * Created by 박수연 [ 2026. 6. 26. 오후 2:56 ]
 * Description :
 * ==========================================
 */
@Getter
@Setter
@ToString
public class MypageInVo {


  @Schema(description = "생성자 userSeq")
  private int userSeq;
  
}
