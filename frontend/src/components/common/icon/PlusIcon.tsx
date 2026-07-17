import {LuCirclePlus} from "react-icons/lu";

/**
 * 아이콘 > 마이너스 버튼 아이콘 props
 */
type PlusIconProps = {
  size?: number;
  color?: string;
}
/**
 *  ICON > 마이너스 버튼 ICON
 * @param size   버튼 SIZE
 * @param color  버튼 색상
 * @constructor
 */
export default function PlusIcon({
                                   size = 16,
                                   color = "currentColor"
                                 }: PlusIconProps) {
  return (
    <LuCirclePlus
      size={size}
      color={color}
    />
  );
}
