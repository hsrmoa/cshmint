import MainLayout from "@/components/layouts/main";
import LedgerListLayout from "@/components/layouts/ledgerList";
import FormList from "@/components/common/form/formList/FormList";
import InputWrap from "@/components/common/inputWrap";
import Input from "@/components/common/input";
import FormRow from "@/components/common/form/formRow/FormRow.tsx";
import SelectBox from "@/components/common/selectBox";
import Checkbox from "@/components/common/checkbox";
import React, {useState} from "react";
import type {Ledger, UserLedger} from "@/types/ledger.type.ts";
import {getTodayYmd} from "@/utils/cmmnUtil.ts";
import Button from "@/components/common/button";
import {FormSlot} from "@/components/common/form/formList";

// 기본 정보
const defaultUserLedger: UserLedger = {
  userSeq: null,
  ledgerSeq: null,
  ledgerAuth: 'R',
  authExitDate: '',
  useYn: 'Y',
  masterYn: 'N',
  inviteAgreeYn: 'N',
  showOnedayYn: 'N',
  email: ''
}
// 초대승인자의 Change event
type UserLedgerChgProps = {
  index: number;
  value: string | boolean;
  editId: string;
}

/**
 * 가계부 > 가계부 등록
 * @constructor
 */
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
  const [userLedgerList, setUserLedgerList] = useState<UserLedger[]>([defaultUserLedger]);

  /*****  이벤트  & 함수 ******/
    // 가계부 EDIT change
  const onLedgerEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLedgerInfo({
        ...ledgerInfo,
        [e.target.id]: e.target.value
      });
    }
  //  초대요청 목록
  const onUserLedgerListChg = ({index, value, editId}: UserLedgerChgProps) => {
    // alert(index + "/" + value);
    setUserLedgerList(prev =>
      prev.map((item, i) => i === index
        ? {...item, [editId]: value}
        : item
      )
    );
  }
  /**
   * 가계부 생성 > 저장버튼 클릭
   */
  const onLedgerCreateSave = () => {
      alert("저장");
  }
  // 행추가 목록
  const onUserLedgerAddRow = () => {
    setUserLedgerList(prev => [...prev, defaultUserLedger]);
  }
  // 항삭제 목록
  const onUserLedgerDelRow = (delIndex: number) => {
    setUserLedgerList(prev => prev.filter((_, i) => i !== delIndex));
  }
  return (
    <MainLayout>
      <LedgerListLayout
        title="가계부 만들기"
        bodyType="grid"
        searchSort={<Button variant="primary" type="button" OnClick={onLedgerCreateSave}>저장</Button>}
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
              onAdd={onUserLedgerAddRow}
              onRemove={onUserLedgerDelRow}
            >
              <Input
                type="text"
                value={item.email}
                key={`email-${idx}`}
                inputId={`email-${idx}`}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onUserLedgerListChg({
                    index: idx,
                    editId: 'email',
                    value: e.target.value
                  });
                }}
              />
              <SelectBox
                key={`ledgerAuth-${idx}`}
                value={item.ledgerAuth}
                selectId={`ledgerAuth-${idx}`}
                options={[{value: 'R', label: '읽기'}, {value: 'U', label: '쓰기'}]}
                onChange={(value: string) => {
                  onUserLedgerListChg(({
                    index: idx,
                    editId: 'ledgerAuth',
                    value: value
                  }))
                }}
              />
              <FormSlot visible={item.ledgerAuth !== 'R'} size="md">
                <Checkbox checked={item.showOnedayYn} id={`showOnedayYn-${idx}`} onChange={(checked: boolean) => {
                  onUserLedgerListChg({
                    index: idx,
                    editId: 'showOnedayYn',
                    value: (checked) ? 'Y' : 'N'
                  })
                }} label="하루만 보기"/>
              </FormSlot>
            </FormRow>
          ))}
        </FormList>
      </LedgerListLayout>
    </MainLayout>
  )
}