import {LuChevronDown} from "react-icons/lu";

/**
 * 아이콘 > 화살표 다운 버튼 아이콘 props
 */
type CrownProps = {
  size?: number;
  color?: string;
}
/**
 *  ICON > 화살표 다운  버튼 ICON
 * @param size   버튼 SIZE
 * @param color  버튼 색상
 * @constructor
 */
export default function Crown({
                                size = 16,
                                color = "currentColor"
                              }: CrownProps) {
  return (
    <LuChevronDown
      size={size}
      color={color}
    />
  )
}
