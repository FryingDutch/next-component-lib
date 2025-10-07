import React from "react";
import LabeledButtons from "./LabeledButtons";
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
  onSuccess?: (...args: any[]) => any,
  onFail?: (...args: any[]) => any,
  altButton?: boolean
}

const LabeledSubmitDataButton = (({url, data, label, buttonLabel, className, labelClassName, method, contentType, onSuccess, onFail, altButton}: LabeledSubmitDataButtonProps): React.JSX.Element => {
    return (
        <LabeledButtons label={label} className={className} labelClassName={labelClassName}>
            <SubmitDataButton url={url} data={data} label={buttonLabel} altButton={altButton} method={method} contentType={contentType} onSuccess={onSuccess} onFail={onFail}/>
        </LabeledButtons>
    );
});

export default LabeledSubmitDataButton;