import MainLayout from "@/components/layouts/main";
import LedgerListLayout from "@/components/layouts/ledgerList";
import FormList from "@/components/common/form/formList/FormList";
import InputWrap from "@/components/common/inputWrap";
import Input from "@/components/common/input";
import FormRow from "@/components/common/form/formRow/FormRow.tsx";
import SelectBox from "@/components/common/selectBox";
import Checkbox from "@/components/common/checkbox";
import React, { useState } from "react";
import type {Ledger, UserLedger} from "@/types/ledger.type.ts";
import {getTodayYmd} from "@/utils/cmmnUtil.ts";
import Button from "@/components/common/button";
import {FormSlot} from "@/components/common/form/formList";

// 기본 정보
const defaultUserLedger:UserLedger= {
  userSeq: null,
  ledgerSeq: null,
  ledgerAuth: 'R',
  authExitDate: '',
  useYn:'Y',
  masterYn:'N',
  inviteAgreeYn: 'N',
  showOnedayYn: 'N',
  email:''
}

export function LedgerCreate() {
  /*** 변수 *****/
    // 가계부 정보
  const [ledgerInfo, setLedgerInfo] = useState<Ledger>({
      ledgerSeq: null,
      ledgerNm: '',
      ledgerYear: getTodayYmd("YYYYMMDD"),
      delYn: 'N'
    });
  // 초대여부
  const [userLedgerList] = useState<UserLedger[]>([defaultUserLedger, {
    userSeq: null,
    ledgerSeq: null,
    ledgerAuth: 'U',
    authExitDate: '',
    useYn:'Y',
    masterYn:'N',
    inviteAgreeYn: 'N',
    showOnedayYn: 'N',
    email:''
  }]);

  /*****  이벤트  & 함수 ******/
  const onLedgerEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLedgerInfo({
      ...ledgerInfo,
      [e.target.id]: e.target.value
    });
  }
  const onUserLedgerEditChange = (e:React.ChangeEvent<HTMLInputElement>) => { debugger
    console.log(e);
  }
  return (
    <MainLayout>
      <LedgerListLayout
        title="가계부 만들기"
        bodyType="grid"
        searchSort={<Button variant="primary" type="button">저장</Button>}
      >
        <FormList>
          <InputWrap
            isFullWidth={false}
            label="장부이름"
            className="w350"
          >
            <Input
              type="text"
              inputId="ledgerNm"
              value={ledgerInfo.ledgerNm}
              onChange={onLedgerEditChange}
            />
          </InputWrap>
        </FormList>
        <FormList columns={['친구초대']}>
          {userLedgerList.map((item, idx) => (
            <FormRow
              key={idx}
              rowIndex={idx}
              isLast={idx === userLedgerList.length - 1}
            >
              <Input
                type="text"
                value={item.email}
                key={`email-${idx}`}
                inputId={`email-${idx}`}
                onChange={onUserLedgerEditChange}
              />
              <SelectBox
                key={`ledgerAuth-${idx}`}
                value={item.ledgerAuth}
                options={[{value: 'R', label: '읽기'}, {value: 'U', label: '쓰기'}]}
              />
              <FormSlot visible={item.ledgerAuth !== 'R'} size="md">
                <Checkbox checked={false} onChange={()=> {}} label="하루만 보기"/>
              </FormSlot>
            </FormRow>
          ))}
        </FormList>
      </LedgerListLayout>
    </MainLayout>
  )
}