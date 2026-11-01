// features/alertSlice.ts
import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type { AlertType } from "@/components/modals/alert/alert.type.ts";

export type AlertOption = {
  type?: AlertType;
  message: string;
  confirmText?: string;
  onConfirm: (() => void) | null;
};

export type AlertState ={
  isOpen: boolean;
  alertOption?: AlertOption
}

const initialState: AlertState = {
  isOpen: false,
  alertOption: {
    message: '',
    type: 'info',
    confirmText: "확인",
    onConfirm: null,
  }
};
/**
 * ALERT
 */
export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    onOpenAlert: (
      state,
      action: PayloadAction<AlertOption>
    ) => {
      state.isOpen = true;
      state.alertOption = {
        message : action.payload.message,
        type : action.payload.type || 'info',
        confirmText : action.payload.confirmText || '확인',
        onConfirm: action.payload.onConfirm
      }
    },
    closeAlert: (state) => {
      state.isOpen = false;
      state.alertOption = initialState.alertOption;
    },
  },
});

export const { onOpenAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;