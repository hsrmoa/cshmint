import styles from './LedgerCard.module.scss';
import IconButton from "@/components/common/icon/IconButton.tsx";
import React from "react";
import Button from "@/components/common/button";

/**
 * 가계부 > 목록카드 파라미터
 */
type LedgerCardProps = {
  title?: string;
  className?: 'orange' | 'green' | '';
  children?: React.ReactNode;
  onClick?: (rowIndex: number) => void;
  onAdd?: () => void;
  isLast?: boolean;
  cardIndex?: number;
  isShowSetting?: boolean;
  onSettingClick? :(rowIndex:number) => void;
  isInvited?: boolean;
  inviteUserNm?: string | '';
  onAccept? :() => void;
  onReject? :() => void;
}
/**
 * 가계부 > 목록카드 틀정보
 * @param title        카드목록 타이틀정보
 * @param className    카드 style class 명
 * @param children     카드 내용
 * @param footer      카드 footer
 * @param onClick   카드 클릭 이벤트
 * @param onAdd     카드 추가 목록
 * @param isLast    카드의 마지막여부
 * @param cardIndex 여러 카드일 경우의 index 정보
 * @param isShowSetting 설정버튼 출력여부
 * @param onSettingClick 설정버튼 클릭 이벤트
 * @param isInvited 초대여부
 * @param onAccept 수락버튼 클릭이벤트
 * @param onReject 거절버튼 클릭이벤트
 * @constructor
 */
export default function LedgerCard({
                                     title = '',
                                     className = 'green',
                                     children,
                                     onClick,
                                     onAdd,
                                     isLast = true,
                                     cardIndex = 0,
                                     isShowSetting = true,
                                     onSettingClick,
                                     isInvited = true,
                                     inviteUserNm = "소라빵",
                                     onAccept,
                                     onReject
                                   }: LedgerCardProps) {
  /**
   * 목록성 카드 클릭시
   */
  const onLedgerCardClick = () => {
    // 행의 마지막일 떄
    if (isLast) {
      onAdd?.();
    } else {
      onClick?.(cardIndex);
    }
  }

  /**
   * 설정 버튼 클릭시
   */
  const onLedgerCardSetClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    // 설정 버튼 클릭 이벤트가 카드 클릭으로 전파되지 않도록 막음
    e.stopPropagation();
    onSettingClick?.(cardIndex);
  }
  return (
    <div
      className={styles.card}
      onClick={onLedgerCardClick}
      role="button"
      tabIndex={0}
    >
      {title && !isLast && (
        <div className={`${styles.cardHeader} ${styles[className]}`}>
          <span className={styles.cardTitle}>
            {title}
          </span>
          {isShowSetting &&
              <IconButton
                  icon="settings"
                  size={20}
                  color="#fff"
                  classNm={styles.settingButton}
                  onClick={onLedgerCardSetClick}
              />
          }
        </div>
      )}
      {/* 마지막 행이 아닐 때 */}
      {!isLast && (
        <div className={styles.cardBody}>
          {children}
        </div>
      )}
      {isLast && (
        <IconButton
          icon="plus"
          size={50}
          color="#3EB489"
          classNm={styles.newCard}
        />
      )}
      {/* 초대받은 여부가 존재시*/}
      {isInvited && !isLast  && (
        <div className={styles.inviteDimLayer}>
          <div className={styles.inviteBox}>
            <div className={styles.inviteMessage}>
              {inviteUserNm}님에게 초대받은 <br/>가계부가 있습니다. <br/>
              초대를 허락하시겠습니까?
            </div>
          </div>
          <div className={styles.inviteButtons}>
            <Button variant="primary" OnClick={onAccept}>수락</Button>
            <Button variant="secondary" OnClick={onReject}>거절</Button>
          </div>
        </div>
      )}
    </div>
  );
}
