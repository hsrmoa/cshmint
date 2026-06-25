import styles from './LedgerCard.module.scss';
import IconButton from "@/components/common/icon/IconButton.tsx";

/**
 * 가계부 > 목록카드 파라미터
 */
type LedgerCardProps = {
  title?: string;
  className?: 'orange' | 'green' | '';
  children?: React.ReactNode;
  onClick?: (rowIndex: number) => void;
  onAdd?: () => void;
  isLast?: boolean;
  cardIndex?: number;
}
/**
 * 가계부 > 목록카드 틀정보
 * @param title        카드목록 타이틀정보
 * @param className    카드 style class 명
 * @param children     카드 내용
 * @param footer      카드 footer
 * @param onClick   카드 클릭 이벤트
 * @param onAdd     카드 추가 목록
 * @param isLast    카드의 마지막여부
 * @param cardIndex 여러 카드일 경우의 index 정보
 * @constructor
 */
export default function LedgerCard({
   title = '',
   className = 'green',
   children,
   onClick,
   onAdd,
   isLast = true,
   cardIndex= 0
 }: LedgerCardProps) {
  /**
   * 목록성 카드 클릭시
   */
  const onLedgerCardClick = () => {
    // 행의 마지막일 떄
    if(isLast) {
      onAdd?.();
    } else {
      onClick?.(cardIndex);
    }
  }
  return (
    <div
      className={styles.card}
      onClick={onLedgerCardClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {title && !isLast && (
        <div className={`${styles.cardHeader} ${styles[className]}`}>
          {title}
        </div>
      )}
      {/* 마지막 행이 아닐 때 */}
      {!isLast && (
        <div className={styles.cardBody}>
          {children}
        </div>
      )}
      {isLast && (
        <IconButton
          icon="plus"
          size="50px"
          color="#3EB489"
          classNm={styles.newCard}
        />
      )}
    </div>
  );
}
