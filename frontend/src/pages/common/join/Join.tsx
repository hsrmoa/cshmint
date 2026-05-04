import styles from './Join.module.scss';
import AuthLayout from "@/components/layouts/auth";
import FormCard from "@/components/common/formCard";
import InputWrap from "@/components/common/inputWrap";
import Input from '@/components/common/input';
import ButtonWrap from "@/components/common/buttonWrap";
import Button from "@/components/common/button";
import Icon from "@/components/common/icon/Icon.tsx";
import ProfileImgUpload from "@/components/common/prifileImgUpload";

/**
 * 회원가입 페이지
 * @constructor
 */
function Join() {
  return (
    <div className={styles.joinBody}>
      <AuthLayout>
        <FormCard>
          <ProfileImgUpload></ProfileImgUpload>
          <InputWrap
            label="이메일"
            isFullWidth={true}
          >
            <Input
              type="text"
              inputId="email"
              placeholder="이메일주소를 입력해주세요."
            />
          </InputWrap>
          <InputWrap
            label="비밀번호"
            isFullWidth={true}
          >
            <Input
              type="password"
              inputId="pwd"
              placeholder="비밀번호를 입력해주세요."
            />
          </InputWrap>
          <InputWrap
            label="비밀번호 확인"
            isFullWidth={true}
          >
            <Input
              type="password"
              inputId="pwdChk"
              placeholder="비밀번호 확인을 입력해주세요."
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
            />
          </InputWrap>
          <ButtonWrap>
            <Button variant="primary">회원가입</Button>
          </ButtonWrap>
        </FormCard>
      </AuthLayout>
    </div>
  );
}

export default Join;