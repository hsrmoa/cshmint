import {type ReactNode, useEffect, useMemo, useState} from "react";
import { CmmnCodeContext } from "./CmmnCodeContext";
import type {CmmnCodeContextValue, CmmnCodes} from "@/common/codes/cmmCode.type.ts";
import {fetchCmmnCodes} from "@/common/codes/cmmnCode.api.ts";

interface CmmnCodeProviderProps {
  children: ReactNode;
}

const EMPTY_CODES: CmmnCodes[] = [];

/**
 * 공통 > 코드정보  Provider
 * @param children
 * @constructor
 */
export function CmmnCodeProvider({children}:CmmnCodeProviderProps) {
  const [rows, setRows] = useState<CmmnCodes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCodes(): Promise<void> {
      try {
        const data = await fetchCmmnCodes(controller.signal);


        if(!controller.signal.aborted) {
          setRows(data);
        }
      } catch(error: unknown) {
        if(!controller.signal.aborted) {
          setError(error instanceof Error ? error: new Error("공통 조회 중 오류가 발생했습니다."));
        }
      } finally {
        if(!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void loadCodes();

    return () => controller.abort();
  }, []);

  // API 응답이 바뀔 때만 그룹별로 묶습니다.
  const codesByGroup = useMemo(() => {
    const grouped = new Map<string, CmmnCodes[]>();

    for (const row of rows) {
      const group = grouped.get(row.code);

      if (group) {
        group.push(row);
      } else {
        grouped.set(row.code, [row]);
      }
    }

    return grouped;
  }, [rows]);

  const value = useMemo<CmmnCodeContextValue>(
    () => ({
      loading,
      error,
      getCodes: (groupCode) =>
        codesByGroup.get(groupCode) ?? EMPTY_CODES,
      getCodeName: (groupCode, code) =>
        codesByGroup
          .get(groupCode)
          ?.find((item) => item.code === code)
          ?.detailCodeNm ?? "",
    }),
    [codesByGroup, loading, error],
  );


  return (
    <CmmnCodeContext.Provider value={value} >
      {children}
    </CmmnCodeContext.Provider>
  )
}