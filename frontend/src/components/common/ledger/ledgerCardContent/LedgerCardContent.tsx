import styles from './LedgerCardContent.module.scss';

type OwnerColor = 'orange' | 'green';

/**
 * 가계부 > 카드목록 > 내용 파라미터
 */
type LedgerCardContentProps = {
  owner: string;
  members?: string[];
  createAt?: string;
  ownerColor?: OwnerColor
}

export default function LedgerCardContent({
                                            owner,
                                            members = [],
                                            createAt = '',
                                            ownerColor = 'green'
                                          }: LedgerCardContentProps) {
  return (
    <div className={styles.content}>
      {/* OWNER AREA*/}
      <div className={styles.ownerRow}>
        <span className={`${styles.ownerDot} ${styles[ownerColor]}`} />
        <span className={styles.ownerName}>{owner}</span>
      </div>

      <div className={`${styles.divider} ${styles[ownerColor]}`} />

      {/* MEMBER AREA */}
      <div className={styles.memberList}>
        {members.map((member) => (
          <div key={member} className={styles.memberItem}>
            <span className={styles.memberDot} />
            <span className={styles.memberName}>{member}</span>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        {createAt && ( <span className={styles.dateLabel}>생성일 : </span>)}
        {createAt && ( <span className={styles.dateValue}>{createAt}</span>)}
      </div>
    </div>
  )
}