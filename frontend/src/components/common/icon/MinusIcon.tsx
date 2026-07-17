import {LuCircleMinus} from "react-icons/lu";

/**
 * 아이콘 > 마이너스 버튼 아이콘 props
 */
type MinusIconProps = {
  size?: number;
  color?: string;
}
/**
 *  ICON > 마이너스 버튼 ICON
 * @param size   버튼 SIZE
 * @param color  버튼 색상
 * @constructor
 */
export default function MinusIcon({
                                    size = 16,
                                    color = "currentColor"
                                  }: MinusIconProps) {
  return (
    <LuCircleMinus
      size={size}
      color={color}/>
  );
}
