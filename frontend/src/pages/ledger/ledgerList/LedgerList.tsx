import MainLayout from "@/components/layouts/main";
import LedgerListLayout from "@/components/layouts/ledgerList";
import type {SelectBoxOptionProps} from "@/components/common/selectBox/selectBox.type.ts";
import SelectBox from "@/components/common/selectBox";
import {useEffect, useState} from "react";
import type {LedgerList, LedgerListRequest, LedgerSelInfo} from "@/types/ledger.type.ts";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import {getLedgerListApi} from "@/api/ledger/ledger.api.ts";
import LedgerCard from "@/components/common/ledger/ledgerCard";
import {useAppNavigate} from "@/hooks/navigate/useAppNavigate.ts";
import LedgerCardContent from "@/components/common/ledger/ledgerCardContent";
import {useCmmnCodes} from "@/hooks/code/useCmmnCodes.ts";
import type {CmmnCodes} from "@/common/codes/cmmCode.type.ts";

/**
 * 가계부 > 가계부 목록
 * @constructor
 */
export default function LedgerList() {

  const {  getCodes } = useCmmnCodes();
  const codeList:CmmnCodes[] = getCodes("CD001");
  // 검색 Option정보
  const searchOption: SelectBoxOptionProps[] = codeList.map((item) => ({
    value: item.flag2, label: item.detailCodeNm
  }));

  // const searchOption: SelectBoxOptionProps[] = [{label:"test", value: "DESC"}];

  // 검색조건
  const [orderValue, setOrderValue] = useState<string>("ASC");
  const [ledgerList, setLedgerList] = useState<LedgerSelInfo[]>([]);

  // localStrage에 있는 UserInfo 정보 가져오기
  const userInfo = useSelector((state: RootState) => state.auth?.userInfo);

  const { goLedgerCreate } = useAppNavigate();
  /******* EVENT ******/
    // SELECT박스 chang 이벤트
  const onOrderChange = (value: string) => {
      setOrderValue(value);
    }
  // 검색 SELECT 요소
  const SearchElelment = (
    <SelectBox
      options={searchOption}
      value={orderValue}
      onChange={onOrderChange}
    />
  );

  // 가계부 목록정보 조회
  const onGetLedgerList = async () => {
    const params: LedgerListRequest = {
      userSeq: userInfo?.userSeq || null,
      orderValue: orderValue
    };
    // 가계부목록 조회
    const response = await getLedgerListApi(params);
    if (response.status === 200) {
      const ledgerList = response.data;
      ledgerList.push({
        ledgerInVo: {
        ledgerSeq: 0,
        ledgerNm: '',
        ledgerYear: '',
        userSeq: 0,
        userNm: '',
        masterYn: '',
        authExitDate: '',
        inviteAgreeYn: '',
        ledgerAuth: '',
        useYn: 'Y',
        showOnedayYn: 'Y',
        createDate: ''
      }, userLedgerInVoList:[]})
      setLedgerList(ledgerList);
    }
  }
  // 등록화면으로 이동하기
  const onAddLedger = () => {
    goLedgerCreate(null);
  }
  // 수정화면으로 이동하기
  const onEditLedgerClick = (index:number) => {
    goLedgerCreate(ledgerList[index].ledgerInVo.ledgerSeq)
  }

  /******* useEffect ******/
  useEffect(() => {
    onGetLedgerList();
  }, []);
  /**
   * 가계부의 소유자가 로그인사용자인지 여부 반환함수
   * @param masterYn 마스터여부
   */
  const getIsShowSetting = (masterYn:string):boolean => {
    return masterYn === 'Y'
  }
  return (
    <MainLayout>
      <LedgerListLayout
        title="가계부 목록"
        searchSort={SearchElelment}
        bodyType="cardList"
      >
        {ledgerList.length > 0 &&
          ledgerList.map((item, idx) => (
            <LedgerCard
              cardIndex={idx}
              title={item.ledgerInVo.ledgerNm}
              isLast={ledgerList.length-1 === idx}
              className={item.ledgerInVo.masterYn === 'Y' ? 'green' : 'orange'}
              onAdd={onAddLedger}
              isShowSetting={getIsShowSetting(item.ledgerInVo.masterYn)}
              onSettingClick={onEditLedgerClick}
            >
              <LedgerCardContent
                owner={item.ledgerInVo.userNm}
                createAt={item.ledgerInVo.createDate}
                members={item.userLedgerInVoList.map(item => item.userNm)}
              />
            </LedgerCard>
          ))
        }
      </LedgerListLayout>
    </MainLayout>
  )
}

