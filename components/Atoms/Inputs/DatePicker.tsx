import cn from "./../../../utils/cn"
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { enUS, Locale } from "date-fns/locale";
import { useState } from "react";

export type DatePickerProps = {
  className?: string;
  calendarClassName?: string;
  dayClassName?: string;
  weekendClassName?: string,
  selected?: Date | null;
  showTimeSelect?: boolean;
  timeIntervals?: number;
  timeCaption?: string;
  dateFormat?: string;
  placeholderText?: string;
  minDate?: Date;
  maxDate?: Date;
  locale?: Locale;
  todayButtonLabel?: string;
  onCalendarOpen?: () => void;
  onCalendarClose?: () => void;
onChange?: (date: Date | null) => void;
};

const DatePicker = ({
  className,
  calendarClassName,
  dayClassName,
  weekendClassName,
  selected,
  onChange,
  showTimeSelect,
  timeIntervals = 15,
  timeCaption,
  dateFormat = "dd/MM/yyyy",
  placeholderText = "Select date and time",
  minDate,
  maxDate,
  locale = enUS,
  todayButtonLabel = "Today",
  onCalendarOpen,
  onCalendarClose,
}: DatePickerProps) => {
     const [singleDate, setSingleDate] = useState<Date | null>(new Date());

    return (
        <ReactDatePicker
          selected={singleDate}
          onChange={(date) => setSingleDate(date)}
          showTimeSelect={showTimeSelect}
          timeIntervals={timeIntervals}
          timeCaption={timeCaption}
          dateFormat={dateFormat}
          placeholderText={placeholderText}
          minDate={minDate}
          maxDate={maxDate}
          locale={locale}
          className={cn("text-center cursor-pointer border-2 border-primary", className)}
          calendarClassName={cn("bg-black", calendarClassName)}
          dayClassName={(date) => cn(date.getDay() === 0 || date.getDay() === 6 ? weekendClassName : "", dayClassName)}
          popperClassName="!bg-black !overflow-hidden !rounded-2xl"
          todayButton={todayButtonLabel}
          onCalendarOpen={onCalendarOpen}
          onCalendarClose={onCalendarClose}
          wrapperClassName=""
        />
    );
};

export default DatePicker;