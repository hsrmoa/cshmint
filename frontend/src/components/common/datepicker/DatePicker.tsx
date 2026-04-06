import styles from '@/components/common/datepicker/DatePicker.module.scss';
import inputStyles from '@/components/common/input/Input.module.scss';
import Icon from "@/components/common/icon/Icon.tsx";
import { useState } from "react";
import {DayPicker, getDefaultClassNames} from "react-day-picker";
import { ko } from 'date-fns/locale';
import "react-day-picker/dist/style.css";


/**
 * DatePicker 컴포넌트 Props
 */
type DatePickerProps = {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  className?: string;
  prefix?: React.ReactNode;
  onChange?: (value: Date | undefined) => void;
};

/**
 * 컴포넌트 > Datepicker
 * @param value         datepicker의 출력할 value 값
 * @param placeholder   datepicker의 placeholder
 * @param disabled      비활서여부
 * @param isError       에러여부
 * @param prefix        datepicker 앞에 출력할 Node정보
 * @param className     datepicker의 className
 * @param onChange      onChange 이벤트
 * @constructor
 */
export default function DatePicker({
                                     value = "",
                                     placeholder = "YYYY-MM-DD",
                                     disabled = false,
                                     isError = false,
                                     prefix,
                                     className = '',
                                     onChange
                                   }: DatePickerProps) {

  // calendar open 여부
  const [isOpen, setIsOpen] = useState(false);

  /******************************
   * ✏️ INPUT CLASS
   ******************************/
  const inputClassName = [
    inputStyles.input,
    isError ? inputStyles.error : '',
    prefix ? styles.hasSuffix : '',
    inputStyles[className]
  ].filter(Boolean)
    .join(' ');


  /******************************
   * 📅 Calendar CLASS
   ******************************/
  const calendarClassName = [
    styles.calendarButton,
    isError ? styles.error : ''
  ].filter(Boolean)
    .join(' ');

  /******************************
   * 📅 DatePicker CLASS
   ******************************/
  const defaultClassName = getDefaultClassNames();

  /******************************
   * 📅 Calendar toggle 이벤트
   ******************************/
  const handleToggleCalendar = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  }

  /******************************
   * 📅 Calendar 일자 선택 이벤트
   ******************************/
  const handleSelectDate = (date: Date | undefined) => {
    onChange?.(date);
    setIsOpen(false);
  }
  return (
    <div className={styles.datePicker}>
      <div className={styles.inputArea}>
        {prefix && (<span className={styles.prefix}>{prefix}</span>)}
        <input
          className={inputClassName}
          type="text"
          value={value}
          placeholder={placeholder}
          readOnly
          disabled={disabled}
          onClick={handleToggleCalendar}
        />
        <button
          type="button"
          className={calendarClassName}
          disabled={disabled}
          onClick={handleToggleCalendar}
          aria-label="날짜 선택"
        >
          <Icon name="calendar"/>
        </button>
      </div>
      {isOpen && (
        <DayPicker
          mode="single"
          locale={ko}
          onSelect={handleSelectDate}
          weekStartsOn={1}
          classNames={{
            ...defaultClassName,
            root: styles.popup,
            months:styles.month,
            month_caption:styles.monthCaption,
            nav:styles.nav,
            button_previous: styles.navButton,
            button_next:styles.navButton,
            weekdays:styles.weekdays,
            weekday:styles.weekday,
            day:styles.day,
            day_button: styles.dayButton,
            selected: styles.selected,
            today: styles.today,
            outside: styles.outside,
            disabled:styles.disabled
          }}
        />
      )}
    </div>
  );
}