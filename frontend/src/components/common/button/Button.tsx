import styles from "./Button.module.scss";
import React from "react";

/**
 * 컴포넌트 > 버튼 파라미터
 */
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  OnClick?: () => void;
}

/**
 * 컴포넌트 > 버튼
 * @param children  버튼 내용
 * @param variant   버튼 스타일 타입
 * @param className 버튼 className
 * @param disabled  버튼 비활성여부
 * @param type      버튼 타입
 * @param OnClick   버튼 클릭이벤트
 * @constructor
 */
function Button({
                  children,
                  variant = 'primary',
                  className = '',
                  disabled = false,
                  type = 'button',
                  OnClick
                }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} ${styles[className]}`}
      onClick={OnClick}
    >
      {children}
    </button>
  );
}

export default Button;