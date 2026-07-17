import {LuCalendarDays} from "react-icons/lu";

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
    <LuCalendarDays
      size={size}
      color={color}
    />
  );
}
