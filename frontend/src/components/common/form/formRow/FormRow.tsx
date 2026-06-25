import styles from "../formList/FormList.module.scss";
import React from "react";
import IconButton from "@/components/common/icon/IconButton.tsx";

/**
 * 가계부 > Form 목록의 행 컴포넌트
 */
type FormRowProps = {
  children: React.ReactNode;
  isLast: boolean;
  onAdd?: () => void;
  onRemove?: () => void;
}

/**
 * 가계부 > Form 목록의 행 컴포넌트
 * @param children  행 React Node
 * @param isLast   행의 마지막여부
 * @param onAdd   추가 이벤트
 * @param onRemove  삭제 이벤트
 * @constructor
 */
export default function FormRow({
  children,
  isLast = true,
  onAdd,
  onRemove
}:FormRowProps) {
  return (
    <div className={styles.row}>
       <div className={styles.fields}>
         {children}
       </div>
      <IconButton
        icon={isLast ? "plus": "minus"}
        classNm={styles.actionButton}
        onClick={isLast ? onAdd: onRemove}
        color="#2B9D7E"
        size="25px"
      />
    </div>
  );
}