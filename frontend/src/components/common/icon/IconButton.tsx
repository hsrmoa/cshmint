import Icon from "@/components/common/icon/Icon.tsx";
import { Icons } from "./iconCommon.ts";
/**
 * 버튼 > 아이콘
 */
type IconButtonProps = {
  icon: keyof typeof Icons;
  onClick?: () => void;
  size?: number;
  color?: string;
  classNm?: string;
}
/**
 * 버튼 > 아이콘 버튼
 * @param icon    아이콘 Key
 * @param onClick   아이콘 클릭 이벤트
 * @param size    아이콘 크기
 * @param color   아이콘 색깔
 * @param classNm class명
 * @constructor
 */
export default function IconButton({
  icon
, onClick
, size
, color
, classNm
}: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNm}
    >
      <Icon
        name={icon}
        size={size}
        color={color}
      />
    </button>
  );
}