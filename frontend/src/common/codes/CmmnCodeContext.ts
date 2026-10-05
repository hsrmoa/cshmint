import {createContext} from "react";
import type {CmmnCodes} from "@/types/cmmCode.type.ts";

export const CmmnCodeContext = createContext<CmmnCodes | undefined>(undefined);