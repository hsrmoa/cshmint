import styles from './ProfileImgUpload.module.scss';
import Icon from "@/components/common/icon/Icon.tsx";
import {useRef, useState} from "react";

/**
 * 가게부 > 이미지 파일 Upload 파라미터
 */
type ProfileImgUploadProps = {
  plusIconColor?: string;
  onChange?: (file: File | null) => void;
}
/**
 * 프로파일 이미지 파일 업로드 컴포넌트
 * @param plusIconColor
 * @param onClick
 * @constructor
 */
export default function ProfileImgUpload({
                                           plusIconColor = '#3EB489',
                                           onChange
                                         }: ProfileImgUploadProps) {
  // 이미지 파일 REF
  const imgFileRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  // 버튼 클릭 시
  const onPlusIconClick = () => {
    imgFileRef.current?.click();
  }
  // 파일 변경시
  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const imgFile = e.target.files?.[0] ?? null;

    if (!imgFile) {
      onChange?.(null);
      return;
    }

    setPreviewUrl(URL.createObjectURL(imgFile));
    onChange?.(imgFile);    /// 부모로 파일전달

  }

  return (
    <div className={styles.avatarBody}>
      <button
        type="button"
        className={styles.avatarCircle}
        onClick={onPlusIconClick}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="프로필 미리보기"
            className={styles.previewImage}
          />
        ) : (
          <Icon
            name="plus"
            size={20}
            color={plusIconColor}
          />
        )}
      </button>

      <input
        ref={imgFileRef}
        type="file"
        accept="image/*"
        className={styles.fileInput}
        onChange={onFileInputChange}
      />
    </div>
  );
}