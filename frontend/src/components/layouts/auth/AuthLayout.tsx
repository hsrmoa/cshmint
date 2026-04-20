import styles from './AuthLayout.module.scss';
import logo from '@/assets/mintLogo.png';
/**
 *  로그인 레이아웃 파라미터
 */
type AuthLayoutProps = {
  children: React.ReactNode;
}

/**
 * 로그인 > 로그인 레이아웃 Layout
 * @param children
 * @constructor
 */
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
      <div className={styles.loginPage}>
        <div className={styles.logoArea}>
          <img src={logo} alt="MINT" className={styles.logo}/>
          <p className={styles.subTitle}>
            My Income &amp; Needs Tracker
          </p>
        </div>
        {children}
      </div>
  );
}