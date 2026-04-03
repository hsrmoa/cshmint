import styles from "./Input.module.scss";
import React from 'react';
import Icon from '@/components/common/icon/Icon';

/**
 * input 박스의 Props 정보
 */
type InputProps = {
  type?: 'text' | 'number' | 'password' | 'search';
  value?: string | number;
  placeholder?: string | '';
  disabled?: boolean;
  className?: string | '';
  isError?: boolean;
  suffix?: React.ReactNode;
  suffixType?: 'icon' | 'text';
  onSuffixClick?: () => void;
}

/**
 * 컴포넌트 > INPUT 박스
 * @param type    input 박스 타입
 * @param value   input 박스 value
 * @param placeholder input 박스 info 정보
 * @param disabled    input 박스 비활성여부
 * @param isError     input 박스 에러여부
 * @param className   input 박스 className
 * @param suffix      input 박스 suffix Node 정보
 * @param suffixType  input 박스 suffix 타입정보
 * @param onSuffixClick input 박스 suffix 클릭 이벤트
 * @constructor
 */
function Input({
                 type = 'text',
                 value,
                 placeholder = '텍스트를 입력해주세요',
                 disabled = false,
                 isError = false,
                 className = '',
                 suffix,
                 suffixType = 'text',
                 onSuffixClick,
               }: InputProps) {

  const hasSuffix = !!suffix;
  const hasActionSuffix = type === 'search' && !!onSuffixClick;

  /*************************
   *   ✏️ Input Class Name
   *************************/
  const inputClass = [
    styles.input,
    hasSuffix && suffixType === 'text' ? styles.hasSuffix : '',
    hasActionSuffix ? styles.hasActionSuffix : '',
    isError ? styles.error : '',
    styles[className]
  ].filter(Boolean)
    .join(' ');


  /*******************************
   * 👩‍💻️ INPUT 컴포넌트의 HTML
   *******************************/
  return (
    <div className={styles.field}>
      <input
        type={type}
        value={value}
        className={inputClass}
        placeholder={placeholder}
        disabled={disabled}
      />
      {hasSuffix && !hasActionSuffix && (
        <span className={styles.suffix}>
              {suffixType === 'text' ? (
                <span className={styles.suffixText}> {suffix} </span>
              ) : (
                <span className={styles.suffixIcon}> {suffix} </span>
              )}
            </span>
      )}
      {hasActionSuffix && (
        <button
          type='button'
          className={styles.suffixButton}
          onClick={onSuffixClick}
          disabled={disabled}
          aria-label="검색"
        >
          <Icon name="search"/>
        </button>
      )}
    </div>
  );
}

export default Input;