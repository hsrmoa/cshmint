import styles from "./AlertModal.module.scss";
import type { AlertType } from "./alert.type.ts";
import { AlertIcon } from "@/components/common/icon/AlertIcon.tsx";

/**
 * Alert > AlertModal Props 정보
 */
type AlertModalProps = {
  isOpen?: boolean;
  type?: AlertType;
  message: string;
  confirmText?: string;
  onConfirm: () => void;
}
/**
 * 공통 모달 > alert
 * @param isOpen
 * @param title
 * @param message
 * @param confirmText
 * @param onConfirm
 * @constructor
 */
export default function AlertModal({
    isOpen = false
,   type = "info"
,   message
,   confirmText = "확인"
,   onConfirm
}: AlertModalProps) {
  if(!isOpen) return null;

  return (
    <div className={styles.alert}>
      <div className={styles.dim} />
      <div className={styles.modal}>

        <div className={styles.icon}>
          <AlertIcon type={type} size={64} />
        </div>

        <div className={styles.message}>{message}</div>
        <div className={styles.buttonWrap}>
          <button
            type="button"
            className={styles.confirmButton}
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}