package com.cshbk.cshmint.common.vo.out;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/**
 * ==========================================
 * Project : cshmint > 사용자 정보
 * Created by 한소라 [ 2026. 4. 29. 오후 12:18 ]
 * Description :
 * ==========================================
 */
@Getter
@Setter
@Builder
public class UserVo {

 private int userSeq;
 private String email;
 private String pwd;
 private String userNm;
 private String proImg;
}
