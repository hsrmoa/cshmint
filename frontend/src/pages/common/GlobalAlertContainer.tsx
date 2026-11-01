// components/common/GlobalAlertContainer.tsx
import { useSelector, useDispatch } from 'react-redux';
import { closeAlert } from '@/features/alertSlice';
import AlertModal from '@/components/modals/alert/AlertModal';
import type {RootState} from "@/app/store.ts"; // 💡 기존에 만드신 AlertModal import

/**
 * 최상위 Alert 정보
 * @constructor
 */
export default function GlobalAlertContainer() {
  const dispatch = useDispatch();
  const { isOpen, message, confirmText, type } = useSelector(
    (state: RootState) => state.alert
  );

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeAlert());
  };

  // 기존 AlertModal의 Props 명칭(message, onClose, onConfirm 등)에 맞게 전달합니다.
  return (
    <AlertModal
      isOpen={isOpen}
      confirmText={confirmText}
      message={message}
      type={type}
      onConfirm={handleClose}
    />
  );
}