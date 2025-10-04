import cn from '@/utils/cn';
import TimePicker from "react-accessible-time-picker";

export type ReactTimeInputProps = {
    className?: string;
    container?: string;
    label?: string;
    timePicker?: string;
    timeInputs?: string;
    timeInput?: string;
    separator?: string;
    pipe?: string;
    periodSelect?: string;
    selectContent?: string;
    selectItem?: string;
    selectIndicator?: string;
    selectScrollButton?: string;
    popoverContent?: string;
    popoverColumns?: string;
    popoverColumn?: string;
    popoverColumnTitle?: string;
    popoverItem?: string;
    popoverActiveItem?: string;
    timeTrigger?: string;
}

const ReactTimeInput = ({
  className,
  container,
  label,
  timePicker,
  timeInputs,
  timeInput,
  separator,
  pipe,
  periodSelect,
  selectContent,
  selectItem,
  selectIndicator,
  selectScrollButton,
  popoverContent,
  popoverColumns,
  popoverColumn,
  popoverColumnTitle,
  popoverItem,
  popoverActiveItem,
  timeTrigger,
}: ReactTimeInputProps) => {
    return (
        <div className={cn("inline-flex", className)} style={{ 
            "--time-focus-border": "var(--primary)"
            } as React.CSSProperties}>
            <TimePicker
                classes={{
                container: cn("", container),
                label: cn("!bg-primary", label),
                timePicker: cn("!rounded-none", timePicker),
                timeInputs: cn("", timeInputs),
                timeInput: cn("!bg-primary/20", timeInput),
                separator: cn("", separator),
                pipe: cn("!bg-primary", pipe),
                periodSelect: cn("", periodSelect),
                selectContent: cn("", selectContent),
                selectItem: cn("!bg-primary", selectItem),
                selectIndicator: cn("", selectIndicator),
                selectScrollButton: cn("", selectScrollButton),
                popoverContent: cn("", popoverContent),
                popoverColumns: cn("", popoverColumns),
                popoverColumn: cn("", popoverColumn),
                popoverColumnTitle: cn("!bg-primary !text-white !justify-center", popoverColumnTitle),
                popoverItem: cn("hover:bg-black", popoverItem),
                popoverActiveItem: cn("!bg-primary/40", popoverActiveItem),
                timeTrigger: cn("!bg-primary/30 !text-white", timeTrigger),
                }}
            />
        </div>
    );
}

export default ReactTimeInput;