import {LuSearch} from "react-icons/lu";

/**
 * 아이콘 > 검색 버튼 아이콘 props
 */
type SearchIconProps = {
  size?: number;
  color?: string;
}
/**
 *  ICON > 검색 버튼 ICON
 * @param size   버튼 SIZE
 * @param color  버튼 색상
 * @constructor
 */
export default function SearchIcon({
                                     size = 16,
                                     color = "currentColor"
                                   }: SearchIconProps) {
  return (
    <LuSearch
      size={size}
      color={color}
    />
  );
}
