import {type LoaderFunctionArgs, redirect} from 'react-router-dom';
import { store } from '@/app/store'; // Redux store 직접 import
import {selectIsLedgerRead, setLedger} from '@/features/LedgerSlice';
import {getLedgerDetailApi} from "@/api/ledger/ledger.api.ts";
import {LEDGERS_PATHS} from "@/routes/paths";
import {onOpenAlert} from "@/features/alertSlice.ts";

/**
 * 가계부 목록 권한
 * @param params
 */
export const entityLoader = async ({ params }: LoaderFunctionArgs) => {
  const ledgerSeq:number = Number(params.id) ;
  const state = store.getState();
  const curUserSeq = state.auth.userInfo?.userSeq || null;

  // 1. 가계부 데이터 가져오기 (예시)
  const response = await getLedgerDetailApi({
    ledgerSeq:ledgerSeq,
    orderValue:'',
    userSeq: null
  });

  // 조회에 실패했을때
  if (!response.success) {
    // 1. 기존 AlertModal에 띄울 메시지와 타입을 store.dispatch로 전달
    store.dispatch(
      onOpenAlert({
        message: '존재하지 않는 가계부입니다',
        type: 'error',
      })
    );
    return redirect(LEDGERS_PATHS.LEDGER_LIST);
  }

  const { data:ledger } = response;
  // 2. Redux Store에 현재 가계부 상태 세팅 (컴포넌트 진입 전 미리 dispatch!)
  store.dispatch(setLedger({ ledger: ledger.ledger,ledgerUser:ledger.userLedgerList , ledgerUserSeq: curUserSeq as number }));

  // 3. 로더 내에서 Redux Selector를 이용해 권한 검증
  const updatedState = store.getState();
  const ledgerReadAuthYn = selectIsLedgerRead(updatedState);

  // 읽기 권한
  if (!ledgerReadAuthYn) {
    // 1. 기존 AlertModal에 띄울 메시지와 타입을 store.dispatch로 전달
    store.dispatch(
      onOpenAlert({
        message: '접근 권한이 없는 가계부입니다.',
        type: 'error',
      })
    );
    return redirect(LEDGERS_PATHS.LEDGER_LIST);
  }

  return { ledger };
};
