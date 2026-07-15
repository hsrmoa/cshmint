import MainLayout from "@/components/layouts/main";
import LedgerListLayout from "@/components/layouts/ledgerList";
import FormList from "@/components/common/form/formList/FormList";
import InputWrap from "@/components/common/inputWrap";
import Input from "@/components/common/input";
import FormRow from "@/components/common/form/formRow/FormRow.tsx";
import SelectBox from "@/components/common/selectBox";
import Checkbox from "@/components/common/checkbox";
import React, {useRef, useState} from "react";
import type {Ledger, LedgerRegInfo, UserLedger} from "@/types/ledger.type.ts";
import {getTodayYmd, isEmpty} from "@/utils/cmmnUtil.ts";
import Button from "@/components/common/button";
import {FormSlot} from "@/components/common/form/formList";
import {emailValid} from "@/utils/validation.ts";
import useAlert from "@/hooks/modals/useAlert.ts";
import {setLedgerApi} from "@/api/ledger/ledger.api.ts";
import {useAppNavigate} from "@/hooks/navigate/useAppNavigate.ts";

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
      ledgerYear: getTodayYmd("YYYY").toString(),
      delYn: 'N'
    });
  const [ledgerErroMsg, setLedgerErrMsg] = useState<{
    ledgerNm: string;
  }>({
    ledgerNm: ""
  });
  // 장부이름 REF
  const ledgerNmRef = useRef<HTMLInputElement>(null);

  // 초대여부
  const [userLedgerList, setUserLedgerList] = useState<UserLedger[]>([defaultUserLedger]);
  const emailRefs = useRef<(HTMLInputElement | null)[]>([]);
  const {onOpenAlert} = useAlert();
  const { goLedgerList } = useAppNavigate();
  /*****  이벤트  & 함수 ******/
    // 가계부 EDIT change
  const onLedgerEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLedgerErrMsg({ledgerNm: ''});
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
  const onLedgerCreateSave = async () => {
    // 저장 이전 vlaidation 체크
    if (onLedgerValid()) {
      const ledgerRegParams: LedgerRegInfo = {
        userLedgerInVoList: userLedgerList.filter((item) => !isEmpty(item.email)),
        ledgerInVo: ledgerInfo
      }
      const response = await setLedgerApi(ledgerRegParams);
      alert(JSON.stringify(response));
      if (response.success) {
        onOpenAlert({
          message: "저장에 성공하였습니다.", onConfirm: () => {
            goLedgerList();
          }
        })
      }
    }
  }
  /**
   * 저장 이전 validation chk
   */
  const onLedgerValid = () => {
    if (isEmpty(ledgerInfo.ledgerNm)) {
      ledgerNmRef.current?.focus();
      setLedgerErrMsg({ledgerNm: "장부이름을 입력해주세요."});
      return false;
    }
    // 가계부 목록
    if (userLedgerList.length > 0) {
      // 이메일 일부라도 입력시 이메일 형식 체크
      for (const [index, item] of userLedgerList.entries()) {
        const emailValidErrMsg = emailValid(item.email);
        if (!isEmpty(emailValidErrMsg) && !isEmpty(item.email)) {
          onOpenAlert({
            message: emailValidErrMsg, type: 'error', onConfirm: () => {
              emailRefs.current[index]?.focus();
            }
          });
          return false;
        }
      }
    }
    return true;
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
            errorMessage={ledgerErroMsg.ledgerNm}
            isError={!isEmpty(ledgerErroMsg.ledgerNm)}
          >
            <Input
              type="text"
              inputId="ledgerNm"
              value={ledgerInfo.ledgerNm}
              onChange={onLedgerEditChange}
              isError={!isEmpty(ledgerErroMsg.ledgerNm)}
              ref={ledgerNmRef}
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
                ref={(el) => {
                  emailRefs.current[idx] = el
                }}
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