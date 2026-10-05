import type {ConfirmState} from "@/components/modals/confirm/confirm.type.ts";
import styles  from "./ConfirmModal.module.scss";

type ConfirmModalProps = ConfirmState & {
  onConfirm: () => void;
  onCancel: () => void;
}

/**
 * Confirm 모달 창
 * @param title
 * @param message
 * @param confirmText
 * @param cancelText
 * @param onConfirm
 * @param onCancel
 * @constructor
 */
export default function ConfirmModal({
                                       isOpen,
                                       title = "확인",
                                       message,
                                       confirmText = "확인",
                                       cancelText = "취소",
                                       onConfirm,
                                       onCancel
                                     }: ConfirmModalProps) {

  if (!isOpen) {
    return null;
  }
  // Overlay 클릭 이벤트
  function handleOverlayClick(e:React.MouseEvent<HTMLDivElement>) {
    if(e.target === e.currentTarget) {
      onCancel();
    }
  }
  // Overlay Keydown 이벤트
  function handleKeyDown(
    e: React.KeyboardEvent<HTMLDivElement>
  ) {
    if (e.key === 'Escape') {
      onCancel();
    }
  }

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
    >
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-title"
          aria-describedby="confirm-message"
        >
          <div className={styles.header}>
            <h2 id="confirm-title" className={styles.title}>
              {title}
            </h2>
          </div>

          <div className={styles.body}>
              <p id="confirm-message" className={styles.message}>
                {message}
              </p>
          </div>

          <div className={styles.footer}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onCancel}
            >
              {cancelText}
            </button>
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