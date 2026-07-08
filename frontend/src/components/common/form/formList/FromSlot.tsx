import React from "react";
import styles from './FormSlot.module.scss';

type FormSlotProps = {
  visible?: boolean;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function FromSlot({
                                   visible = true,
                                   size = 'md',
                                   children
                                 }: FormSlotProps) {
  const formSlotStlye =[
    styles.formSlot,
    styles[size],
    !visible ? styles.isHidden : "",
  ].filter(Boolean).join(" ");
  return (
    <div
      className={formSlotStlye}
    >
      {children}
    </div>
  );
}