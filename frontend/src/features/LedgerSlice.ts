import type {Ledger, UserLedger} from "@/types/ledger.type.ts";
import {createSelector, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from "@/app/store.ts";
import {compareDateWithToday} from "@/utils/cmmnUtil.ts";


/** 가계부 권한 타입  **/
export type LedgerRole = "R" | "W" ;

/** 가계부 상태 **/
interface LedgerState {
  ledger:Ledger | null;
  ledgerUser: UserLedger | null;
  ledgerRole: LedgerRole | null;
  ledgerMasterYn: string;
}
/** 가계부 초기상태 **/
const initialState: LedgerState = {
  ledger: null,
  ledgerUser: null,
  ledgerRole: null,
  ledgerMasterYn: "Y"
};
/**
 * STORE > 가계부 정보
 */
export const ledgerSlice = createSlice({
  name: "ledger",
  initialState,
  reducers: {
    /**
     * 가계부 정보 목록 설정
     * @param state
     * @param action
    */
      setLedger: (
        state,
        action: PayloadAction<{ ledger:Ledger, ledgerUser:UserLedger[], ledgerUserSeq: number }>
      ) => {
        const { ledger, ledgerUserSeq } = action.payload;
        const ledgerUser = action.payload.ledgerUser;
        const userLedger = ledgerUser.find((item) => item.userSeq === ledgerUserSeq);

        state.ledger = ledger;
        state.ledgerUser = userLedger?? null;
        state.ledgerRole = userLedger?.ledgerAuth as 'R' | "W";
        state.ledgerMasterYn = userLedger?.masterYn as string;
      },
    /**
     * 가계부 정보 초기화
     * @param state
    */
    clearLedger: (state) => {
      state.ledger = null;
      state.ledgerUser = null;
      state.ledgerRole = null;
      state.ledgerMasterYn = "Y";
    }
  },
});
/**
 * ACTION 변수
 */
export const { setLedger, clearLedger } = ledgerSlice.actions;

/**
 * Typed Selectors
 * @param state
 */
// 가계부 정보
export const selectLedger = (state: RootState) => state.ledger.ledger;
// 가계부 사용자 정보
export const selectLedgerUser = (state: RootState) => state.ledger.ledgerUser;
// 가계부 사용자 권한
export const selectLedgerRole = (state: RootState) => state.ledger.ledgerRole;
// 가계부 마스터 여부
export const selectLedgerMasterYn = (state: RootState) => state.ledger.ledgerMasterYn;
/**
 * createSelector
 * 1. 정의 - Redux Toolkit(Reselect)에서 제공하는 메모이제이션(캐싱) 기능이 있는 Selecotr 함수
 * 2. 사용이유
 *    - 메모제이션을 통한 성능 최적화(입력받는 값이 변경되었을 때만 연산을 다시 수행하고, 변하지 않았다면 Caching 해둔 이전 결과값을 그대로 반환
 *    - 불필요한 컴포넌트 리렌더링 방지
 * 3. 문법
 *    3.1 [Input Selectors]: 상태에서 필요한 원본 데이터들을 뽑아오는 Selector 배열
 *      - [(state: RootState) => state.account.transactions, (state: RootState) => state.account.filterCategory]
 *    3.2 [Output Selectors]: 위에서 뽑아온 데이터들을 인수로 받아 실제로 가공하는 함수
 *      - (transactions, filterCategory) => {
 *          // Input 데이터가 이전과 동일하다면 이 내부 로직은 아예 실행조차 되지 않고 이전 결과를 반환함
 *          return transactions.filter(t => t.category === filterCategory);
 *        }
 */
// 가계부 작성권한 여부
export const selectIsLedgerWrite = createSelector(
  [selectLedgerRole, selectLedgerMasterYn],
  (ledgerRole, ledgerMasterYn):boolean => {
     // 가계부 마스터 일때
    if(ledgerMasterYn === "Y") return true;
    // 가계부 사용자의 권한이 쓰기권한이 일때
    return ledgerRole != null && ledgerRole === "W";
  }
)
// 가계부 읽기권한 여부
export const selectIsLedgerRead = createSelector(
  [selectLedgerRole, selectLedgerMasterYn, selectLedgerUser],
  (ledgerRole, ledgerMasterYn, ledgerUser):boolean => {
    // 마스터 여부
    if(ledgerMasterYn === "N" && ledgerRole === "R") {
      // 만료일자 체크
      if(compareDateWithToday(ledgerUser?.authExitDate as string) === -1) {
        return false;
      }
    }
    return true;
  }
)
// 가계부 마스터 여부
export const selectMasterYn = createSelector(
  [selectLedgerMasterYn],
  (ledgerMasterYn): boolean => {
    return ledgerMasterYn === "Y";
  }
)

export default ledgerSlice.reducer;