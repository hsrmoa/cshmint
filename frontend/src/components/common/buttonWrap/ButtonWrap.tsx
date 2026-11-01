import styles from './ButtonWrap.module.scss';

/**
 * 컴포넌트 > 버튼 Wrap
 */
type ButtonWrapProps = {
  children: React.ReactNode;
  isVertical?: boolean;   // 가로/세로 여부
  className?: string;
}
/**
 * 컴포넌트 > 버튼 틀?
 * @param children
 * @param isVertical
 * @param className
 * @constructor
 */
export default function ButtonWrap({
                                     children
                                   , isVertical = false
                                   , className = ''} : ButtonWrapProps)
{
  return (
    <div className={`${styles.wrapper} ${isVertical ? styles.vertical : ''} ${className}`}>
      {children}
    </div>
  );
}