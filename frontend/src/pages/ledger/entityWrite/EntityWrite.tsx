import MainLayout from "@/components/layouts/main";
import LedgerListLayout from "@/components/layouts/ledgerList";
import { useLocation} from "react-router-dom";
// import {useState} from "react";
// import type {LedgerList} from "@/types/ledger.type.ts";
import FormCard from "@/components/common/formCard";
import SelectBox from "@/components/common/selectBox";
import DatePicker from "@/components/common/datepicker";
import Input from "@/components/common/input";
import Button from "@/components/common/button";
import ButtonWrap from "@/components/common/buttonWrap";
import Table from "@/components/common/table/Table.tsx";
import {useState} from "react";
import type {LedgerList} from "@/types/ledger.type.ts";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";

/**
 * 가계부 작성 > 작성 메인 페이지
 * @constructor
 */
export default function EntityWrite() {
  /*** 변수 및 상태 관리 ***/
  const location = useLocation();

  // 1. location.state 에러 방지 (옵셔널 체이닝 적용)
  const ledgerSelInfo = location.state?.ledgerSelInfo;
  const [ledgerInVo] = useState<LedgerList | undefined>(ledgerSelInfo?.ledgerInVo);

  // 2. Redux에서 가계부 데이터 꺼내기 (loader에서 store.dispatch로 넣어둔 데이터)
  const ledgerState = useSelector((state: RootState) => state.ledger);

  // 3. 만약 라우터 loader 데이터를 꺼내 쓰고 싶다면 useRouteLoaderData 사용
  // const loaderData = useRouteLoaderData("부모라우트ID") as { ledger: any };
  // SIDE 패널
  const sidePanel =  (
    <>
    <FormCard>
      {/* 수입/지출 */}
      <SelectBox
        options={[{label:"수입/지출", value:""}]}
        value=""
        placeholder="수입/지출"
      />
      {/* 지출일 */}
      <DatePicker placeholder="지출일" />
      {/* 계정선택 */}
      <SelectBox
        options={[{label:"계정선택", value:""}]}
        value=""
        placeholder="계정선택"
      />
      {/* 항목선택 */}
      <SelectBox
        options={[{label:"항목선택", value:""}]}
        value=""
        placeholder="항목선택"
      />
      <Input placeholder="금액" />
      <Input placeholder="내역" />
      <ButtonWrap>
        <Button variant="danger">삭제</Button>
        <Button variant="secondary">저장</Button>
      </ButtonWrap>
    </FormCard>
    <ButtonWrap isVertical={true} className="mt30">
      <Button variant="primary">항목설정</Button>
      <Button variant="primary">계정설정</Button>
      <Button variant="primary">반복지출설정</Button>
      <Button variant="primary">내정보설정</Button>
    </ButtonWrap>
    </>
  );

  /** HTML 구조***/
  return (
    <MainLayout
      sidePanel={sidePanel}
    >
      <LedgerListLayout
          title={ledgerInVo?.ledgerNm}
          bodyType="grid"
      >
        <Table
          columns={[
            {
              key:"name",
              title: "이름"
            },
            {
              key:"id",
              title: "TEST",
              align: "center"
            }
          ]}
          data={[]}
        />
        {`ledgerState ==>` + JSON.stringify(ledgerState)} <br/>
        {`LEDGER ==>` + JSON.stringify(ledgerInVo)}
      </LedgerListLayout>
    </MainLayout>
  )
}