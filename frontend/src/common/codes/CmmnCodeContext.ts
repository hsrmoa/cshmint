import {createContext} from "react";
import type {CmmnCodeContextValue} from "@/common/codes/cmmCode.type.ts";

export const CmmnCodeContext = createContext<CmmnCodeContextValue | undefined>(undefined);