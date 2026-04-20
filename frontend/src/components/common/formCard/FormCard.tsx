import styles from './FormCard.module.scss';

/**
 * FORM CARD 파라미터
 */
type FormCardProps = {
  children?: React.ReactNode;
  className? : string;
}

/**
 * CARD > FORM CARD
 * @param children 자식 노드
 * @param className Style Class Name
 * @constructor
 */
export default function FormCard({ children, className =''} :FormCardProps) {
  return (
    <div className={`${styles.formCard} ${className}`}>
      {children}
    </div>
  );
}