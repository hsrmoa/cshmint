import MainLayout from "@/components/layouts/main";
import LedgerListLayout from "@/components/layouts/ledgerList";
import type {SelectBoxOptionProps} from "@/components/common/selectBox/selectBox.type.ts";
import SelectBox from "@/components/common/selectBox";
import {useEffect, useState} from "react";
import type {LedgerList, LedgerListRequest} from "@/types/ledger.type.ts";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import {getLedgerListApi} from "@/api/ledger/ledgerList.api.ts";
import LedgerCard from "@/components/common/ledger/ledgerCard";
import {useAppNavigate} from "@/hooks/navigate/useAppNavigate.ts";

/**
 * 가계부 > 가계부 목록
 * @constructor
 */
export default function LedgerList() {
    // 검색 Option정보
    const searchOption :SelectBoxOptionProps[]= [
        { value: 'ASC', label: '생성일 빠른순'},
        { value: 'DESC', label: '생성일 느린순'}
    ];
    // 검색조건
    const [orderValue, setOrderValue] = useState<string>("ASC");
    const [ledgerList, setLedgerList] = useState<LedgerList[]>([]);

    // localStrage에 있는 UserInfo 정보 가져오기
    const userInfo  = useSelector((state: RootState) => state.auth?.userInfo);
    
    const { goLedgerCreate } = useAppNavigate();
    /******* EVENT ******/
      // SELECT박스 chang 이벤트
    const onOrderChange = (value :string) => {
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
        const params:LedgerListRequest = {
            userSeq: userInfo?.userSeq || null,
            orderValue: orderValue
        };
        // 가계부목록 조회
        const response = await getLedgerListApi(params);
        if(response.status === 200) {
            setLedgerList(response.data.ledgerList);
        }
    }
    // 등록화면으로 이동하기
    const onAddLedger = () => {
        goLedgerCreate();
    }

    /******* useEffect ******/
    useEffect(() => {
        onGetLedgerList();
    }, []);

    return (
      <MainLayout>
        <LedgerListLayout
          title="가계부 목록"
          searchSort={SearchElelment}
          bodyType="cardList"
        >
        {ledgerList.length === 0 && (
          <LedgerCard cardIndex={0} onAdd={onAddLedger}
          />
        )}
        </LedgerListLayout>
      </MainLayout>
    )
}

