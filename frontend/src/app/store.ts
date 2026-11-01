import {configureStore} from "@reduxjs/toolkit";
import authReducer from '@/features/authSlice';
import LedgerSlice from "@/features/LedgerSlice.ts";
import alertSlice  from "@/features/alertSlice.ts";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ledger:LedgerSlice,
    alert: alertSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;