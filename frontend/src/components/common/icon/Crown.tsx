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
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 6"
      fill="none">
      <path
        d="M0.799805 0.799988L4.7998 4.79999L8.7998 0.799988"
        stroke={color}
        width = "1.6"
        strokeLinecap = "round"
        strokeLinejoin = "round"
      />
    </svg>
  );
}
