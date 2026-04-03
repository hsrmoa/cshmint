import inputWrapStyles from '@/components/common/inputWrap/inputWrap.module.scss';
import React from "react";

/**
 * INPUT WRPPAER  Props 정보
 */
type InputWrapperProps = {
  label?: string;
  isRequired?: boolean;
  isError?: boolean;
  errorMessage?: string;
  isFullWidth?: boolean;
  helperText?: string;
  className?:string;
  children: React.ReactNode;
}

/**
 * 컴포넌트 > 입력 박스 정보
 * @param label        압력박스의 라벨정보
 * @param isFullWidth. 압력박스의 전체사이즈 여부
 * @param isRequired   압력박스의 필수값여부
 * @param isError      압력박스의 에러여부
 * @param errorMessage 압력박스의 출력할 에러메세지
 * @param helperText   압력박스의 도움말 메세지
 * @param className   입력박스 className
 * @param children    압력박스 내부 nodeObject
 * @constructor
 */
function InputWrap({
                     label,
                     isFullWidth = false,
                     isRequired = false,
                     isError = false,
                     errorMessage = '',
                     helperText = '',
                     className='',
                     children
                   }: InputWrapperProps) {
  /*************************
   *   🧩 Wrapper Class Name
   *************************/
  const wrapperClass = [
    inputWrapStyles.wrapper,
    isFullWidth ? inputWrapStyles.fullWidth : '',
    inputWrapStyles[className]
  ].join(' ');

  /*******************************
   * 👩‍💻️ INPUT Wrapper  컴포넌트의 HTML
   *******************************/
  return (
    <div className={wrapperClass}>
      {/* 🏷️ label */}
      <label
        className={inputWrapStyles.label}
      >
        {label}
        {label && isRequired && <span className={inputWrapStyles.required}>*</span>}
      </label>
      {children}
      {/* 🔹 메시지 영역 */}
      {isError ? (
        errorMessage && (
          <span className={`${inputWrapStyles.message} ${inputWrapStyles.errorMessage}`}>
            {errorMessage}
          </span>
        )
      ) : (
        helperText && (
          <span className={inputWrapStyles.message}>{helperText}</span>
        )
      )}
    </div>
  );
}

export default InputWrap;