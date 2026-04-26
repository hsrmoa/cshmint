import styles from './Login.module.scss';
import AuthLayout from "@/components/layouts/auth";
import FormCard from "@/components/common/formCard";
import InputWrap from "@/components/common/inputWrap";
import Input from "@/components/common/input";
import ButtonWrap from "@/components/common/buttonWrap";
import Button from "@/components/common/button";
import { useRef } from 'react';

/**
 * 로그인 페이지
 * @constructor
 */
function Login() {
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


  /**
   * 로그인 버튼 클릭 이벤트
   */
  const loginClick = () => {
    alert("로그인 버튼 click");
  }

  /**
   * 회원가입 버튼 클릭 이벤트
   */
  const moveJoinClick = () => {

    alert("회원가입 버튼 click");
  }
  return (
    <div className={styles.loginBody}>
      <AuthLayout>
        <FormCard>
          <InputWrap
            label="Email"
            isFullWidth={true}
          >
            <Input
              type="text"
              placeholder="이메일주소를 입력해주세요"
              ref={emailRef}
            />
          </InputWrap>
          <InputWrap
            label="Password"
            isFullWidth={true}
          >
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              ref={pwdRef}
            />
          </InputWrap>
          <ButtonWrap>
            <Button variant="primary" OnClick={loginClick}>로그인</Button>
            <Button variant="secondary" OnClick={moveJoinClick}>회원가입</Button>
          </ButtonWrap>
        </FormCard>
      </AuthLayout>
    </div>
  );
}

export default Login;