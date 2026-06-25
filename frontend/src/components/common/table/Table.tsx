import styles from "./Table.module.scss";
import type { TableProps } from './table.type.ts';


/**
 * 공통컴포넌트 > 테이블
 * @param columns   테이블에 출력할 컬럼목록(table.type.ts에서 Column type 참조)
 * @param data     데이터목록
 * @param emptyMessage  데이터가 비어있을때 출력할 메세지
 * @constructor
 */
export default function Table<T>({
  columns,
  data,
  emptyMessage = "조회된 데이터가 없습니다."
 }:TableProps<T>) {
  return (
    <table className={styles.table}>
      <thead>
         <tr>
           {columns.map((column) => (
             <th
              key={String(column.key)}
              style={{ width: column.width}}
             >
               {column.title}
             </th>
           ))}
         </tr>
      </thead>
      {/* TABLE BODY */}
      <tbody>
      {data.length === 0 ? (
        <tr>
          <td
            colSpan={columns.length}
            style={{ textAlign: "center", height:"100px"}}
          >
            {emptyMessage}
          </td>
        </tr>
      ) : (
        data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td
                key={String(column.key)}
                style={{ textAlign: column.align }}
              >
                {
                  column.render
                  ? column.render(row[column.key], row)
                  : String(row[column.key] ?? "")
                }
              </td>
            ))}
          </tr>
        ))
      )}
      </tbody>
    </table>
  )
}
