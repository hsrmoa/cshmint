import type { AlertType } from "@/components/modals/alert/alert.type.ts";
import {LuCircleAlert, LuCircleCheckBig, LuCircleX, LuTriangleAlert} from "react-icons/lu";

/**
 * Alert Type
 */
type AlertIconProps = {
  type: AlertType;
  size?: number;
}

/**
 * ICON > Alert 모달 에 표시할 아이콘
 * @param type  alert Type
 * @param size
 * @constructor
 */
export function AlertIcon({
  type,
  size = 64
}: AlertIconProps) {
  const colorMap = {
    success: "#20C997",
    warning: "#FFB347",
    error: "#FF5C5C",
    info: "#2B9D6D",
  };

  const color = colorMap[type];
  switch (type) {
    case "success":
      return <LuCircleCheckBig size={size} color={color} />
    case "warning":
      return <LuTriangleAlert size={size} color={color} />
    case "error":
      return  <LuCircleX size={size} color={color}/>
    case "info" :
      return <LuCircleAlert size={size} color={color}/>
    default:
      return null;
  }
}
