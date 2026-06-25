package com.cshbk.cshmint.mypage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cshbk.cshmint.common.vo.out.ResultOutVo;
import com.cshbk.cshmint.mypage.service.MypageService;
import com.cshbk.cshmint.mypage.vo.in.MypageInVo;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

/**
 * ==========================================
 * Project : cshmint > 내정보 수정 controller
 * Created by 박수연 [ 2026. 6. 25. 오후 2:00 ]
 * Description :
 * ==========================================
 */

@Slf4j
@RestController
@RequestMapping("/api/mypage")
public class MypageController {

    /**
     * 내정보 수정 서비스
     */
    @Autowired
    private MypageService mypageService;




    /**
   * 내정보 수정 > 사용자 조회
   *
   * @param user_seq 사용자 채번 정보
   * @return
   */ 

    @PostMapping("/selectMypageUser")
    @Operation(summary = "사용자정보 조회", description = "입력한 회원정보를 조회합니다.")
    public ResultOutVo<?> selectMypageUser(@Valid @RequestBody MypageInVo mypageInVo) {
        log.info("===============1. 내정보 수정 컨트롤러 ==================");
        log.info("mypageInVo={}", mypageInVo);
        return ResultOutVo.success(mypageService.selectMypageUser(mypageInVo));
    }
}


