import styles from '@/components/common/selectBox/SelectBox.module.scss';
import {useMemo, useState} from "react";
import Icon from "@/components/common/icon/Icon.tsx";


/*************************
 * 🔘 SELECT 박스 - 옵션 파라미터
 **************************/
type SelectBoxOptionProps = {
  label: string;
  value: string;
}

/*************************
 * 🔘 SELECT 박스 - 파라미터
 **************************/
type SelectBoxProps = {
  value?: string;
  options?: SelectBoxOptionProps[];
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  onChange?: (value: string) => void;
}

/**
 * 컴포넌트 > SELECT 박스
 * @constructor
 */
export default function SelectBox({
                                    value = '',
                                    isError,
                                    options = [],
                                    placeholder = '값을 선택해주세요',
                                    disabled = false,
                                    onChange
                                  }: SelectBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  // 선택한 OPTION 정보
  // useMemo :: 리액트에서 성능 최적화용 훅 [ 계산결과를 "기억(cache)"해서 불필요한 재계산을 막는것 ]
  // options랑 value 값이 바뀔 때만 find를 실행 아니면 이전 결과를 재사용
  const selectOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  );

  /*************************
   * 🔘 SELECT 박스 CLASS NAME
   **************************/
  const triggerClassName = [
    styles.trigger,
    isError ? styles.error : '',
    isOpen ? styles.open : ''
  ].filter(Boolean)
    .join(' ');

  /*************************
   * 🔘 SELECT 박스 OnChagne 이벤트
   **************************/
  const handleSelect = (nextValue: string) => {
    onChange?.(nextValue);
    setIsOpen(false);
  }
  return (
    <div className={styles.select}>
      <button
        type="button"
        className={triggerClassName}
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectOption ? styles.valueText : styles.placeholderText}>
            {selectOption ? selectOption.label : placeholder}
        </span>
        <span className={styles.icon}>
          <Icon name="crown"/>
        </span>
      </button>

      {isOpen && (
        <ul className={styles.dropdown} role="listbox">
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <li key={option.value}>
                <button
                  type="button"
                  className={[
                    styles.option,
                    isSelected ? styles.selected : '',
                  ].filter(Boolean)
                    .join(' ')}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

