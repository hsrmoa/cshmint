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

/**
 * 회원가입 페이지
 * @constructor
 */
function Join() {
  const {goLogin} = useAppNavigate();
  // 이메일주소
  const emailRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>("");
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [emailErrMsg, setEmailErrMsg] = useState<string>("");

  // 비밀번호
  const pwdRef = useRef<HTMLInputElement>(null);
  const [pwd, setPwd] = useState<string>("");
  const [isPwdError, setIsPwdError] = useState<boolean>(false);
  const [pwdErrMsg, setPwdErrMsg] = useState<string>("");

  // 비밀번호 확인
  const pwdChkRef = useRef<HTMLInputElement>(null);
  const [pwdChk, setPwdChk] = useState<string>("");
  const [isPwdChkError, setIsPwdChkError] = useState<boolean>(false);
  const [pwdChkErrMsg, setPwdChkErrMsg] = useState<string>("");

  // 이름
  const nameRef = useRef<HTMLInputElement>(null);
  // const [name, setName] = useState<string>("");
  // const [isNameError, setIsNameError] = useState<boolean>(false);
  // const [nameErrMsg, setNameErrMsg] = useState<string>("");
  /****** 이벤트 ************/
    // 로그인 화면으로 이동하기
  const moveLogin = () => {
      goLogin();
    }

  // 회원가입 버튼 클릭
  const onJoinClick = () => {
    if (!onJoinValidation()) return;


  }

  // INPUT 박스 CHANGE 이벤트
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onErrorClear();
    if ("email" === e.target?.id) {
      setEmail(e.target?.value);
    } else if ("pwd" === e.target?.id) {
      setPwd(e.target?.value);
    } else if( "pwdChk" === e.target?.id) {
      setPwdChk(e.target?.value);
    }
    // else if( "name" === e.target?.id) {
    //   setName(e.target?.value);
    // }
  }

  /****** 일반 함수 ****/
    // 에러관련 state clear
  const onErrorClear = () => {
      // 이메일주소
      setIsEmailError(false);
      setEmailErrMsg("");
      // 비밀번호
      setIsPwdError(false);
      setPwdErrMsg("");
      // 비밀번호 확인
      setIsPwdChkError(false);
      setPwdChkErrMsg("");
    }

  // 회원가입 validation
  const onJoinValidation = () => {
    // 이메일주소
    const emailValidMsg = emailValid(email);
    if (!isEmpty(emailValidMsg)) {
      setIsEmailError(true);
      setEmailErrMsg(emailValidMsg);
      emailRef.current?.focus();
      return false;
    }
    // 비밀번호
    const pwdValidMsg = pwdValid(pwd);
    if (!isEmpty(pwdValidMsg)) {
      setIsPwdError(true);
      setPwdErrMsg(pwdValidMsg);
      pwdRef.current?.focus();
      return false;
    }

    // 비밀번호 확인
    const pwdChkValidMsg = pwdChkValid(pwdChk);
    if (!isEmpty(pwdChkValidMsg)) {
      setIsPwdChkError(true);
      setPwdChkErrMsg(pwdChkValidMsg);
      pwdChkRef.current?.focus();
      return false;
    } else {
      // 비밀번호 & 비밀번호 확인이 다를떄
      if(pwd !== pwdChk) {
        setIsPwdChkError(true);
        setPwdChkErrMsg("비밀번호와 일치하지 않습니다.");
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
            isError={isEmailError}
            errorMessage={emailErrMsg}
          >
            <Input
              type="text"
              inputId="email"
              placeholder="이메일주소를 입력해주세요."
              ref={emailRef}
              isError={isEmailError}
              value={email}
              onChange={onInputChange}
            />
          </InputWrap>
          <InputWrap
            label="비밀번호"
            isFullWidth={true}
            isError={isPwdError}
            errorMessage={pwdErrMsg}
          >
            <Input
              type="password"
              inputId="pwd"
              placeholder="비밀번호를 입력해주세요."
              ref={pwdRef}
              value={pwd}
              isError={isPwdError}
              onChange={onInputChange}
            />
          </InputWrap>
          <InputWrap
            label="비밀번호 확인"
            isFullWidth={true}
            isError={isPwdChkError}
            errorMessage={pwdChkErrMsg}
          >
            <Input
              type="password"
              inputId="pwdChk"
              placeholder="비밀번호 확인을 입력해주세요."
              ref={pwdChkRef}
              value={pwdChk}
              isError={isPwdChkError}
              onChange={onInputChange}
            />
          </InputWrap>
          <InputWrap
            label="이름"
            isFullWidth={true}
          >
            <Input
              type="text"
              inputId="name"
              placeholder="이름을 입력해주세요."
              ref={nameRef}
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