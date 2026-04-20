import styles from './ButtonWrap.module.scss';

/**
 * 컴포넌트 > 버튼 Wrap
 */
type ButtonWrapProps = {
  children: React.ReactNode;
}

export default function ButtonWrap({ children } : ButtonWrapProps) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}