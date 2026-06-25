import styles from './LedgerCard.module.scss';

/**
 * 가계부 > 목록카드 파라미터
 */
type LedgerCardProps = {
  title?: string;
  className?: 'orange' | 'green' | '';
  children?: React.ReactNode;
  onClick?: () => void;
}
/**
 * 가계부 > 목록카드 틀정보
 * @param title        카드목록 타이틀정보
 * @param className    카드 style class 명
 * @param children     카드 내용
 * @param footer      카드 footer
 * @param onClick   카드 클릭 이벤트
 * @constructor
 */
export default function LedgerCard({
                                     title = '',
                                     className = 'green',
                                     children,
                                     onClick
                                   }: LedgerCardProps) {
  return (
    <div
      className={styles.card}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {title && (
        <div className={`${styles.cardHeader} ${styles[className]}`}>
          {title}
        </div>
      )}
      <div className={styles.cardBody}>
        {children}
      </div>
    </div>
  );
}
