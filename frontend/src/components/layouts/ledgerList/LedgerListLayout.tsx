import styles from './LedgerListLayout.module.scss';

/********************
 *  가계부 > 가계부목록 레이아웃 파라미터
 ********************/
type LedgerListLayoutProps = {
  title?: string;
  searchSort?: React.ReactNode;
  bodyType?: 'grid' | 'cardList';
  children: React.ReactNode;
}

/**
 * 가계부 > 가계부 목록 레이아웃
 * @constructor
 */
export default function LedgerListLayout({
                                           title = '',
                                           searchSort = null,
                                           bodyType = 'grid',
                                           children
                                         }: LedgerListLayoutProps) {

  const gridClassName = [
      (bodyType === 'grid')? styles.grid: styles.cardWrap
    ].filter(Boolean)
    .join('');

    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          {searchSort && (
            <div className={styles.searchArea}>
              {searchSort}
            </div>
          )}
        </div>
        <div className={gridClassName}>
          {children}
        </div>
      </div>
    );
}