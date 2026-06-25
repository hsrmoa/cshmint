import styles from "../formList/FormList.module.scss";
import React from "react";
import IconButton from "@/components/common/icon/IconButton.tsx";

/**
 * 가계부 > Form 목록의 행 컴포넌트
 */
type FormRowProps = {
  children: React.ReactNode;
  rowIndex: number;
  isLast: boolean;
  onAdd?: () => void;
  onRemove?: (rowIndex: number) => void;
}

/**
 * 가계부 > Form 목록의 행 컴포넌트
 * @param children  행 React Node
 * @param isLast   행의 마지막여부
 * @param rowIndex  행의 Index 정보
 * @param onAdd   추가 이벤트
 * @param onRemove  삭제 이벤트
 * @constructor
 */
export default function FormRow({
  children,
  isLast = true,
  rowIndex,
  onAdd,
  onRemove
}:FormRowProps) {

  /**
   * 버튼 > 버튼 클릭시 추가 혹은 삭제에 따라 부모 함수 실행 분기
   */
  const onBtnFormRowClick = () => {
    // 행의 마지막일때는 플러스
    if(isLast) {
      onAdd?.();
    } else {
      // 행을 삭제
      onRemove?.(rowIndex);
    }
  }

  return (
    <div className={styles.row}>
       <div className={styles.fields}>
         {children}
       </div>
      <IconButton
        icon={isLast ? "plus": "minus"}
        classNm={styles.actionButton}
        onClick={onBtnFormRowClick}
        color="#2B9D7E"
        size="25px"
      />
    </div>
  );
}