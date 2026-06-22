import React from "react";
import styles from './MainLayout.module.scss';
import Header from '@/components/common/header/Header';

/**
 * 메인 레이아웃 Props
 */
interface MainLayoutProps {
  children: React.ReactNode;
  sidePanel?: React.ReactNode;
}
/**
 * 가계부 > 메인 레이아웃
 * @constructor
 */
export default function MainLayout({
  children,
  sidePanel
}:MainLayoutProps) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <aside className={styles.sidePanel}>
          {sidePanel}
        </aside>
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </>
  );
}