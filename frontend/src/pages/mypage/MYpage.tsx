import Button from '@/components/common/button';
import ButtonWrap from '@/components/common/buttonWrap';
import FormCard from '@/components/common/formCard/FormCard';
import Input from '@/components/common/input/Input';
import InputWrap from '@/components/common/inputWrap/InputWrap';
import ProfileImgUpload from '@/components/common/prifileImgUpload/ProfileImgUpload';
import LedgerListLayout from '@/components/layouts/ledgerList/LedgerListLayout.tsx';
import { useState } from 'react';
import api from "@/api/axios";

/**
 * 로그인 > 마이페이지 수정 layout
 */

 function MYPAGE() {

  const [email, setEmail] = useState<String>("");

  const onClickEvent  = async ()=> {
    const params = {
      userSeq: 2
    }
    const reaponse = await api.post("/api/mypage/selectMypageUser", params);
    console.log(reaponse.data);

  }
  return (
    <LedgerListLayout
        title="내 정보 설정"
        searchSort={<ButtonWrap>
              <Button variant="success" 
              OnClick={onClickEvent}
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
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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








/* import LedgerCard from '@/components/common/ledger/ledgerCard/LedgerCard';
import LedgerCardContent from '@/components/common/ledger/ledgerCardContent/LedgerCardContent';
import SelectBox from '@/components/common/selectBox';
import LedgerListLayout from '@/components/layouts/ledgerList/LedgerListLayout.tsx'; */

/**
 * 가계부목록 화면
 */

/* function MYPAGE() {
    //카드 배열 정의?
  const LedgerCards = [
    {title: '나의 가계부',
    owner: '소라빵', 
    className: 'green', 
    ownerColor: 'green', 
    createAt: '2025-04-19'
},
    {title: '수연이 개발자 만들기_회비', 
        owner: '소라빵', 
        members: ['소라빵', '인우빵', '수연빵'],
        className: 'orange', 
        ownerColor: 'orange', 
        createAt: '2025-04-20'
    },
  ]

  return (
    <LedgerListLayout
      title="가계부 목록"
      bodyType="cardList"
      searchSort=
        {<SelectBox options={[{value: '', label:'전체'}, {value: '1', label:'1'}]}/>}
    >
        /* //정의된 카드 배열을 map으로 반복하여 LedgerCard 컴포넌트 생성 */
/*       {LedgerCards.map((card) => (
        <LedgerCard
          title={card.title}
          className={card.className as 'orange' | 'green'| ""}
        >
          <LedgerCardContent 
          owner={card.owner} 
          ownerColor={card.ownerColor as 'green' | 'orange'} 
          members={card.members}
          createAt={card.createAt}/>
        </LedgerCard>
      ))}
    </LedgerListLayout>

  );
}

export default MYPAGE;  */