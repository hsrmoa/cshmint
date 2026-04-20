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
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none">
      <path
        d="M18.6667 12V25.3333M12 18.6667H25.3333M35.3333 18.6667C35.3333 27.8714 27.8714 35.3333 18.6667 35.3333C9.46192 35.3333 2 27.8714 2 18.6667C2 9.46192 9.46192 2 18.6667 2C27.8714 2 35.3333 9.46192 35.3333 18.6667Z"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
