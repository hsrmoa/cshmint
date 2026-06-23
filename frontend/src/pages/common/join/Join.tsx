import styles from './Join.module.scss';
import AuthLayout from "@/components/layouts/auth";
import FormCard from "@/components/common/formCard";
import InputWrap from "@/components/common/inputWrap";
import Input from '@/components/common/input';
import ButtonWrap from "@/components/common/buttonWrap";
import Button from "@/components/common/button";
import ProfileImgUpload from "@/components/common/prifileImgUpload";
import { useAppNavigate } from "@/hooks/navigate/useAppNavigate.ts";
import { useRef, useState } from "react";
import { emailValid, pwdChkValid, pwdValid} from "@/utils/validation.ts";
import {isEmpty} from "@/utils/cmmnUtil.ts";
import { joinApi } from "@/api/common/login.api";
import type { JoinUserRequest} from "@/types/user.type.ts";

/**
 * 회원가입 페이지
 * @constructor
 */
function Join() {
  // 메뉴 이동을 위한 hook 정보
  const { goLogin } = useAppNavigate();

  // 이메일주소 Ref
  const emailRef = useRef<HTMLInputElement>(null);
  // 비밀번호 Ref
  const pwdRef = useRef<HTMLInputElement>(null);
  // 비밀번호 확인 Ref
  const pwdChkRef = useRef<HTMLInputElement>(null);
  // 이름
  const nameRef = useRef<HTMLInputElement>(null);
  // 회원가입 입력 정본
  const [ joinInfo, setJoinInfo] = useState<JoinUserRequest>({
    email: "",
    password: "",
    passwordChk: "",
    userNm: "",
    proImg: ""
  });
  // 회원가입 에러 정보
  const [ errorMsgInfo, setErrorMsgInfo] = useState({
    email: "",
    password: "",
    passwordChk: "",
    userNm: "",
  });

  /********************** 이벤트 ************/
    // 로그인 화면으로 이동하기
  const moveLogin = () => {
      goLogin();
    }

  // 회원가입 버튼 클릭
  const onJoinClick = async  () => {
    if (!onJoinValidation()) return;

    // 회원가입 API
    const confirmResult = confirm("회원가입을 하시겠습니까?");
    if(confirmResult) {
      // 회원가입 입력 Type에서 비밀번호 체크 type 정보면 제외
      const { passwordChk, ...joinInfoParams} = joinInfo;

      // 회원가입 실행
      await onJoinAction(joinInfoParams);
    }
  }
  /**
   * 회원가입 > 회원가입 실행
   * @param params
   */
  const onJoinAction = async (params: JoinUserRequest) => {
    const response = await joinApi(params);
    // 응답값의 상태값과 회원가입 등록여부가 존재 == 회원가입 성공
    if(response?.status === 200 && response?.data > 0) {
      alert("회원가입에 성공하였습니다.");
      // 로그인화면으로 이동
      goLogin();
    } else {
      if(response?.status === 400) {
        setErrorMsgInfo((prev) => ({
          ...prev,
          email: response?.message
        }));
        emailRef.current.focus();
      } else {
        alert(response?.message);
      }
    }
  }

  /**
   * INPUT 박스 CHANGE 이벤트
   * @param e input 박스 이벤트 객체
   */
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 에러메세지 초기화
    onErrorClear();
    // 입력값 => 등록회원 정보에 데이터 설정
    onSetJoinInfo(e.target?.id, e.target.value);
  }
  /**
   * 회원가입 정보에 데이터 설정
   * @param key   key 정보
   * @param value 입력값
   */
  const onSetJoinInfo = (key: keyof JoinUserRequest, value: string)  => {
    setJoinInfo((prev) => ({
      ...prev,
      [key]: value
    }));
  }

  /****** 일반 함수 ****/
    // 에러관련 state clear
  const onErrorClear = () => {
    // 에러 정보에 초기화
    setErrorMsgInfo({
      email: "",
      password: "",
      passwordChk: "",
      userNm: ""
    });
  }

  // 회원가입 validation
  const onJoinValidation = () => {
    // 이메일주소
    const emailValidMsg = emailValid(joinInfo.email);
    if (!isEmpty(emailValidMsg)) {
      setErrorMsgInfo((prev) => ({
        ...prev,
        email: emailValidMsg
      }));
      emailRef.current?.focus();
      return false;
    }
    // 비밀번호
    const pwdValidMsg = pwdValid(joinInfo.password);
    if (!isEmpty(pwdValidMsg)) {
      setErrorMsgInfo((prev) => ({
        ...prev,
        password: emailValidMsg
      }));
      pwdRef.current?.focus();
      return false;
    }

    // 비밀번호 확인
    const pwdChkValidMsg = pwdChkValid(joinInfo.passwordChk);
if (!isEmpty(pwdChkValidMsg)) {
        setErrorMsgInfo((prev) => ({
          ...prev,
          passwordChk: emailValidMsg
      }));
      pwdChkRef.current?.focus();
      return false;
    } else {
      // 비밀번호 & 비밀번호 확인이 다를떄
      if(joinInfo.password !== joinInfo.passwordChk) {
        setErrorMsgInfo((prev) => ({
          ...prev,
          passwordChk: "비밀번호와 일치하지 않습니다."
        }));
        pwdChkRef.current?.focus();
        return false;
      }
    }
    return true;
  }

  return (
    <div className={styles.joinBody}>
      <AuthLayout
        logoClick={moveLogin}
      >
        <FormCard>
          <ProfileImgUpload ></ProfileImgUpload>
          <InputWrap
            label="이메일"
            isFullWidth={true}
            isError={!!errorMsgInfo.email}
            errorMessage={errorMsgInfo.email}
          >
            <Input
              type="text"
              inputId="email"
              placeholder="이메일주소를 입력해주세요."
              ref={emailRef}
              isError={!!errorMsgInfo.email}
              value={joinInfo.email}
              onChange={onInputChange}
            />
          </InputWrap>
          <InputWrap
            label="비밀번호"
            isFullWidth={true}
            isError={!!errorMsgInfo.password}
            errorMessage={errorMsgInfo.password}
          >
            <Input
              type="password"
              inputId="password"
              placeholder="비밀번호를 입력해주세요."
              ref={pwdRef}
              value={joinInfo.password}
              isError={!!errorMsgInfo.password}
              onChange={onInputChange}
            />
          </InputWrap>
          <InputWrap
            label="비밀번호 확인"
            isFullWidth={true}
            isError={!!errorMsgInfo.passwordChk}
            errorMessage={errorMsgInfo.passwordChk}
          >
            <Input
              type="password"
              inputId="passwordChk"
              placeholder="비밀번호 확인을 입력해주세요."
              ref={pwdChkRef}
              value={joinInfo.passwordChk}
              isError={!!errorMsgInfo.passwordChk}
              onChange={onInputChange}
            />
          </InputWrap>
          <InputWrap
            label="이름"
            isFullWidth={true}
          >
            <Input
              type="text"
              inputId="userNm"
              placeholder="이름을 입력해주세요."
              ref={nameRef}
              value={joinInfo.userNm}
              onChange={onInputChange}
            />
          </InputWrap>
          <ButtonWrap>
            <Button variant="primary" OnClick={onJoinClick}>회원가입</Button>
          </ButtonWrap>
        </FormCard>
      </AuthLayout>
    </div>
  );
}

export default Join;