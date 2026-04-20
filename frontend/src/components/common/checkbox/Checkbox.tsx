import styles from './Checkbox.module.scss';

/**
 * 체크박스 Props
 */
type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
};

/**
 * 체크박스 > 체크박스
 * @param checked   체크여부
 * @param onChange  change 이벤트
 * @param label     라벨
 * @param disabled   비활성여부
 * @constructor
 */
export default function Checkbox({
                                   checked,
                                   onChange,
                                   label,
                                   disabled = false,
                                 }: Props) {
  return (
    <label className={`${styles.wrapper} ${disabled ? styles.disabled : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />

      <span className={styles.box}>
        <span className={styles.check} />
      </span>

      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}