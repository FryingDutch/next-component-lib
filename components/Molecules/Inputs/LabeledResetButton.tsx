import cn from "@/utils/cn"
import React from "react";
import LabeledInput from "./LabeledInput";
import ResetInput from "@/components/Atoms/Inputs/Reset";

export type LabeledResetInputProps = {
    label: string;
    className?: string;
    labelClassName?: string;
    inputClassName?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

const LabeledResetInput = ({className, labelClassName, inputClassName, ...props}: LabeledResetInputProps) => {
    return (
        <LabeledInput
            input={ResetInput}
            className={className}
            labelClassName={labelClassName}
            inputClassName={inputClassName}
            {...props}
        />
    );
};

export default LabeledResetInput;