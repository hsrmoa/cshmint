package com.cshbk.cshmint.cmmn.code.vo.out;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * ==========================================
 * Project : cshmint > 공통코드 OUT VO
 * Created by 한소라 [ 2026. 9. 7. 오전 7:58 ]
 * Description :
 * ==========================================
 */
@Getter
@Setter
@ToString
public class CmmnCodeOutVo {

  private String code;
  private String codeNm;
  private String detailCode;
  private String detailCodeNm;
  private String flag1;
  private String flag2;
}
