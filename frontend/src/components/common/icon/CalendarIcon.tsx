/**
 * 아이콘 > 달력 아이콘 props
 */
type CalendarIconProps = {
  size?: number;
  color?: string;
}
/**
 * ICON > 달력 버튼 ICON
 * @param size  버튼 Size
 * @param color 버튼 색상
 * @constructor
 */
export default function CalendarIcon({
                                       size = 16,
                                       color = 'currentColor'
                                     }: CalendarIconProps) {
return (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M16 2V6M8 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
}
