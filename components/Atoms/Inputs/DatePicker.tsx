import cn from "@/utils/cn"
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { enGB, Locale } from "date-fns/locale";
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
  showPopperArrow?: boolean;
  onCalendarOpen?: () => void;
  onCalendarClose?: () => void;
onChange?: (date: Date | null) => void;
};

const DatePicker = ({
  className,
  calendarClassName,
  dayClassName,
  weekendClassName,
  timeCaption,
  dateFormat = "dd/MM/yyyy",
  minDate,
  maxDate,
  locale = enGB,
  todayButtonLabel = "Today",
  onCalendarOpen,
  onCalendarClose,
}: DatePickerProps) => {
    const [singleDate, setSingleDate] = useState<Date | null>(new Date());
    return (
        <div className={cn("")}>
            <ReactDatePicker
            selected={singleDate}
            onChange={(date) => setSingleDate(date)}
            timeCaption={timeCaption}
            dateFormat={dateFormat}
            minDate={minDate}
            maxDate={maxDate}
            locale={locale}
            className={cn("text-center cursor-pointer border-1 border-primary bg-white")}
            calendarClassName={cn("", calendarClassName)}
            dayClassName={(date) => cn(date.getDay() === 0 || date.getDay() === 6 ? cn("bg-primary/50", weekendClassName) : "", dayClassName)}
            popperClassName=""
            todayButton={todayButtonLabel}
            onCalendarOpen={onCalendarOpen}
            onCalendarClose={onCalendarClose}
            wrapperClassName=""
            showPopperArrow={true}
            renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
            }) => (
            <div className="bg-primary text-white px-2 py-1 flex justify-between items-center">
                <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                    {"<"}
                </button>
                <span className="capitalize">
                    {date.toLocaleDateString(undefined, { month: "long", year: "numeric" })}
                </span>
                <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                    {">"}
                </button>
            </div>
            )}
            />
        </div>
    );
};

export default DatePicker;