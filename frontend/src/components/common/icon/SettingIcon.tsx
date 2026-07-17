import {LuSettings2} from "react-icons/lu";

type SettingIconProps = {
  size?: number;
  color?: string;
}

export default function SettingIcon({
                                      size = 16,
                                      color = "currentColor"
                                    }: SettingIconProps) {
  return (
    <LuSettings2
      size={size}
      color={color}/>
  );
}