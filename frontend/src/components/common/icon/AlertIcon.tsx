import type { AlertType } from "@/components/modals/alert/alert.type.ts";

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
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="2"
      />
      {/*성공 */}
      {type === "success" && (
        <path
          d="M7 12.5L10.5 16L17 9"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {/* 에러 */}
      {type === "error" && (
        <path
          d="M8 8L16 16"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
      {/* 경고 */}
      {type === "warning" && (
        <>
          <line
            x1="12"
            y1="7"
            x2="12"
            y2="13"
            stroke={color}
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="17"
            r="1"
            fill={color}
          />
        </>
      )}
      {/* 정보 */}
      {type === "info" && (
        <>
          <line
            x1="12"
            y1="10"
            x2="12"
            y2="16"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="7"
            r="1"
            fill={color}
          />
        </>
      )}
    </svg>
  );
}
