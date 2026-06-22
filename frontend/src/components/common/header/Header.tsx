import styles from './Header.module.scss';
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import Button from '@/components/common/button/Button'
import { logout } from '@/features/authSlice';
import { useAppNavigate } from "@/hooks/navigate/useAppNavigate.ts";
import logo from '@/assets/whiteLogo.png';

/**
 * 컴포넌트 > 헤더정보
 * @description
 */
export default function Header() {
  const logoClass =[
    styles.logo,
    styles.logoCursor
  ].filter(Boolean)
    .join(' ')

  // localStrage에 있는 UserInfo 정보 가져오기
  const userInfo  = useSelector((state: RootState) => state.auth?.userInfo);

  // 로그아웃을 위해 Store- dispatch 정보 가져오기
  const dispatch = useDispatch();

  // 메뉴이동으로 위한 메뉴이동 Hook 가져오기
  const { goLogin } = useAppNavigate();
  // 로그아웃 버튼
  const onLogout = () => {
    // localStorage에 저장된 로그인정보 삭제 = 로그아웃(refreshToken 정보가 없을때)
    dispatch(logout());
    // 로그인 화면으로 이동
    goLogin();
  }
  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <img src={logo} alt="MINT" className={logoClass}/>
      </div>
      <div className={styles.userInfo}>
        <span>{userInfo?.userNm}</span>
        <span>{userInfo?.email}</span>
        <Button
          variant="primary"
          OnClick={onLogout}
        >
          로그아웃
        </Button>
      </div>
    </header>
  );
}