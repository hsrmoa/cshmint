import styles from './AuthLayout.module.scss';
import logo from '@/assets/mintLogo.png';
/**
 *  로그인 레이아웃 파라미터
 */
type AuthLayoutProps = {
  children: React.ReactNode;
  logoClick?: () => void;
}

/**
 * 로그인 > 로그인 레이아웃 Layout
 * @param children
 * @param logoClick
 * @constructor
 */
export default function AuthLayout({ children ,logoClick}: AuthLayoutProps) {
  const logoClass =[
    styles.logo,
    logoClick ? styles.logoCursor : ''
  ].filter(Boolean)
    .join(' ')
  return (
      <div className={styles.loginPage}>
        <div className={styles.logoArea}>
          <img src={logo} alt="MINT" className={logoClass} onClick={logoClick}/>
          <p className={styles.subTitle}>
            집에 보내주세요 &amp; Needs Tracker
          </p>
        </div>
        {children}
      </div>
  );
}