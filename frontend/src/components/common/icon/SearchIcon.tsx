type SearchIconProps = {
  size?: number;
  color?: string
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
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none">
      <path
        d="M12.7998 12.8L9.8998 9.9M11.4665 6.13334C11.4665 9.07886 9.07866 11.4667 6.13314 11.4667C3.18762 11.4667 0.799805 9.07886 0.799805 6.13334C0.799805 3.18782 3.18762 0.800003 6.13314 0.800003C9.07866 0.800003 11.4665 3.18782 11.4665 6.13334Z"
        stroke={color}
        width = "1.6"
        strokeLinecap = "round"
        strokeLinejoin = "round"
      />
    </svg>
  );
}
