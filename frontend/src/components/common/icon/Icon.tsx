import { Icons } from "./iconCommon.ts";

/**
 * 아이콘 파라미테 정보
 */
type IconProps = {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
}

/**
 *  컴포넌트 >  통합 ICON
 * @param name  아이콘 이름
 * @param size  아이콘 사이즈
 * @param color 아이콘 색깔
 * @constructor
 */
export default function Icon({ name , size, color }:IconProps) {
  const Component = Icons[name];
  return <Component size={size} color={color} />;
}