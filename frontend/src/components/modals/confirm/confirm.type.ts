/**
 * Confirm Modal type
 */
export type ConfirmOptions = {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

export type ConfirmState = ConfirmOptions & {
  isOpen: boolean;
}


export type ConfirmContextType = {
  openConfirm : (options:ConfirmOptions) => Promise<boolean>;
  closeConfirm: () => void;
}