import styles from './ButtonWrap.module.scss';

/**
 * 컴포넌트 > 버튼 Wrap
 */
type ButtonWrapProps = {
  children: React.ReactNode;
}
/**
 * 컴포넌트 > 버튼 틀?
 * @param children
 * @constructor
 */
export default function ButtonWrap({ children } : ButtonWrapProps) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}