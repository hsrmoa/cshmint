import styles from './Login.module.scss';
import AuthLayout from "@/components/layouts/auth";
import FormCard from "@/components/common/formCard";
import InputWrap from "@/components/common/inputWrap";
import Input from "@/components/common/input";
import ButtonWrap from "@/components/common/buttonWrap";
import Button from "@/components/common/button";


/**
 * 로그인 페이지
 * @constructor
 */
function Login() {
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
            />
          </InputWrap>
          <InputWrap
            label="Password"
            isFullWidth={true}
          >
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </InputWrap>
          <ButtonWrap>
            <Button variant="primary">로그인</Button>
            <Button variant="secondary">회원가입</Button>
          </ButtonWrap>
        </FormCard>
      </AuthLayout>
    </div>
  );
}

export default Login;