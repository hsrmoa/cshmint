/* import Button from '@/components/common/button';
import ButtonWrap from '@/components/common/buttonWrap';
import FormCard from '@/components/common/formCard/FormCard';
import Input from '@/components/common/input/Input';
import InputWrap from '@/components/common/inputWrap/InputWrap';
import ProfileImgUpload from '@/components/common/prifileImgUpload/ProfileImgUpload';
import LedgerListLayout from '@/components/layouts/ledgerList/LedgerListLayout.tsx'; */

/**
 * 로그인 > 마이페이지 수정 layout
 */

/* function MYPAGE() {
  return (
    <LedgerListLayout
        title="내 정보 설정"
        searchSort={<ButtonWrap>
              <Button variant="success" 
              OnClick={() => {alert("저장되었습니다.");}}
              >저장</Button>
            </ButtonWrap>}   
    >
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
            label="비밀번호"
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
    </FormCard>
    </LedgerListLayout>
  )
}

export default MYPAGE;
 */








import LedgerCard from '@/components/common/ledger/ledgerCard/LedgerCard';
import LedgerCardContent from '@/components/common/ledger/ledgerCardContent/LedgerCardContent';
import SelectBox from '@/components/common/selectBox';
import LedgerListLayout from '@/components/layouts/ledgerList/LedgerListLayout.tsx';

/**
 * 가계부목록 화면
 */

function MYPAGE() {
    //카드 배열 정의?
  const LedgerCards = [
    {title: '소라빵', owner: '소라빵', createAt: '2025-04-19'},
    {title: '소라빵', owner: '소라빵', createAt: '2025-04-20'},
  ]

  return (
    <header>
    <LedgerListLayout
      title="가계부 목록"
      bodyType="cardList"
    >
      <SelectBox options={[{value: '', label:'전체'}, {value: '1', label:'1'}]}/>

      {LedgerCards.map((card) => (
        <LedgerCard
          title={card.title}
        >
          <LedgerCardContent owner={card.owner} createAt={card.createAt}/>
        </LedgerCard>
      ))}
    </LedgerListLayout>
    </header>
  );
}

export default MYPAGE;