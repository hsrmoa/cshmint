import styles from './FormList.module.scss';
import React from "react";

/**
 * 가계부 > Form 목록 props
 */
type FormListProps = {
  columns?: string[];
  children: React.ReactNode;
}

/**
 * 가계부 > Form 목록
 * @param columns  헤더 컬럼 목록
 * @param children  form children
 * @constructor
 */
export default function FormList({
    columns = []
  , children
} : FormListProps) {
    return (
      <div className={styles.formList}>
        {columns && (
          <div className={styles.header}>
            {columns.map((column) => (
              <div
                key={column}
                className={styles.headerItem}
              >
                {column}
              </div>
            ))}
            <div className={styles.actionArea} />
          </div>
        )}

        <div className={styles.body}>
          {children}
        </div>
      </div>
    );
}