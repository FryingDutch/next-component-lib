import cn from "@/utils/cn"
import { forwardRef } from "react";
import LabeledButton from "./LabeledButton";
import SubmitDataButton from "@/components/Atoms/Buttons/SubmitDataButton";

export type LabeledSubmitDataButtonProps = {
  url: string,
  data: string,
  label: string,
  buttonLabel: string;
  className?: string;
  labelClassName?: string;
  method?: string,
  contentType?: string,
  onSucces?: (...args: any[]) => any,
  onFail?: (...args: any[]) => any,
  altButton?: boolean
}

const LabeledSubmitDataButton = (
    ({label, buttonLabel, altButton, ...props}: LabeledSubmitDataButtonProps): React.JSX.Element => {
    return (
        <LabeledButton button={SubmitDataButton} buttonLabel={buttonLabel} label={label} altButton={altButton} {...props} />
    );
});

export default LabeledSubmitDataButton;