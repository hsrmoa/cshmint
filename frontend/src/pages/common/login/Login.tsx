import styles from './Login.module.scss';
import AuthLayout from "@/components/layouts/auth";
import FormCard from "@/components/common/formCard";
import InputWrap from "@/components/common/inputWrap";
import Input from "@/components/common/input";
import ButtonWrap from "@/components/common/buttonWrap";
import Button from "@/components/common/button";
import React, { useRef, useState } from 'react';
import { emailValid, pwdValid } from "@/utils/validation.ts";
import { isEmpty } from "@/utils/cmmnUtil.ts";
import { Link } from "react-router-dom";
import { useAppNavigate } from "@/hooks/navigate/useAppNavigate.ts";
import { loginApi } from "@/api/common/login.api.ts";
import { useDispatch } from "react-redux";
import { login } from '@/features/authSlice';
import type {LoginRequest} from "@/types/user.type.ts";
import useAlert from "@/hooks/modals/useAlert.ts";


/**
 * 로그인 페이지
 * @constructor
 */
function Login() {
  /********************** 변수 & STATE 선언 *******************/
  // 이동관련 HOOK
  const { goJoin, goLedgerList } = useAppNavigate();

  // Alert Hook
  const {  onOpenAlert } = useAlert();

  // 로그인 성공 처리 ( Store에 로그인 정보 저장)
  const dispatch = useDispatch();

  /**
   * REF
   * 1. 정의 : DOM이나 컴포넌트를 "직접 잡어서 제어" 하는 도구
   * 2. REF를 정의해놓으면 내부적으로 { current: null }의 객체가 생성됨
   * 3. 용도 : DOM을 제어하는데 사용됨
   * 4. 값을 바꿔도 화면이 안바뀜
   */
  // 이메일 주소 INPUT REF
  const emailRef = useRef<HTMLInputElement>(null);
  // 비밀번호 INPUT REF
  const pwdRef = useRef<HTMLInputElement>(null);

  // 로그인 입력 정보
  const [loginInfo, setLoginInfo] = useState<LoginRequest>({
    email: "",
    password: ""
  });
  //  로그인 에러 정보
  const [ errorMsgInfo, setErrorMsgInfo] = useState({
    email: "",
    password: ""
  });

  /**
   * ERROR 관련 Clear
   */
  const onErrorClear = () => {
    setErrorMsgInfo({
      email: "",
      password: ""
    });
  }
  /**
   * 이메일 주소 Change 이벤트
   * @param e
   */
  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    onErrorClear();
    // LoginInfo 정보에 넣기
    onSetLoginInfo(e.target.id, e.target.value);
  }
  /**
   *  INPUT 박스에서 입력한 값 LoginInfo 정보에 넣기
   * @param key  loginINfo
   * @param value
   */
  const onSetLoginInfo = (key: string, value:string) => {
    setLoginInfo((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  /**
   * 로그인 버튼 클릭 이벤트
   */
  const loginClick = async () => {
    // 로그인 실행전 validation 체크
    if(!loginValidation()) return false;

    // 로그인 시도 (백엔드 서버랑 통신)
    const response = await loginApi(loginInfo);
    // 로그인 시도 응답값이 성공일때 ( status 코드가 200 = 성공)
    if(response.status === 200) {
      // 사용자 정보를 localStorage에 저장
      dispatch(login(response.data));
      // 메인화면(=가계부목록)으로 이동
      goLedgerList();
    } else {
      onOpenAlert({message: response.message, type:"warning"});
    }
  }

  /**
   * 로그인 하지 전 validation 체크
   */
  const loginValidation = () => {
    // 입력한 이메일주소 validtaion
    const emailValidMsg = emailValid(loginInfo.email);
    if(!isEmpty(emailValidMsg)) {
      setErrorMsgInfo((prev) => ({
        ...prev,
        "email": emailValidMsg
      }))
      emailRef.current?.focus();
      return false;
    }
    // 입력한 비밀번호 validation 체크
    const pwdValidMsg = pwdValid(loginInfo.password);
    if(!isEmpty(pwdValidMsg)) {
      setErrorMsgInfo((prev) => ({
        ...prev,
        "password": pwdValidMsg
      }))
      pwdRef.current?.focus();
      return false;
    }
    return true;
  }

  /**
   * 회원가입 버튼 클릭 이벤트
   */
  const moveJoinClick = () => {
    goJoin();
  }
  return (
    <div className={styles.loginBody}>
      <AuthLayout>
        <FormCard>
          <InputWrap
            label="이메일"
            isFullWidth={true}
            isError={!!errorMsgInfo.email}
            errorMessage={errorMsgInfo.email}
          >
            <Input
              type="text"
              placeholder="이메일주소를 입력해주세요"
              ref={emailRef}
              value={loginInfo.email}
              inputId="email"
              isError={!!errorMsgInfo.email}
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
              placeholder="비밀번호를 입력해주세요"
              ref={pwdRef}
              value={loginInfo.password}
              isError={!!errorMsgInfo.password}
              inputId="password"
              onChange={onInputChange}
            />
          </InputWrap>
          <ButtonWrap>
            <Button variant="primary" OnClick={loginClick}>로그인</Button>
            <Button variant="secondary" OnClick={moveJoinClick}>회원가입</Button>
          </ButtonWrap>
          <Link className={styles.loginForgetText}  to="/">Forget Password?</Link>
        </FormCard>
      </AuthLayout>
    </div>
  );
}

export default Login;