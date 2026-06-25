import React from "react";

/**
 * 테이블 > 컬럼정보
 */
export type Column<T> = {
  // 컬럼 키 정보
  key: keyof T;
  // 헤더 타이틀
  title: string;
  // 컬럼 넓이
  width?: string;
  // 컬럼 정렬
  align?: "left" | "center" | "right";
  // 테이블 컬럼 내부에 버튼 혹은 체크박스 컴포넌트 요소 넣을때 필요
  render?: (value: any, row: T) => React.ReactNode;
}

/**
 * 테이블 > 테이블 정보
 */
export type TableProps<T> = {
  // 테이블 컬럼 목록
  columns: Column<T>[];
  // 테이블 데이터 목록
  data: T[];
  // 테이블 데이터가 비어있을 때 출력 메세지
  emptyMessage?: string;
}