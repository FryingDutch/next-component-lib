"use client"

import ActionButton, {ActionButtonProps} from './ActionButton';
import React, {forwardRef} from "react";

export type SubmitDataButtonProps = ActionButtonProps & {
    url: string;
    data: string;
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    contentType?: string;
    onSuccess?: (...args: any[]) => any;
    onFail?: (...args: any[]) => any;
};

const SubmitDataButton = forwardRef<HTMLButtonElement, SubmitDataButtonProps>((props, ref): React.JSX.Element => {
    const {url, data, method, contentType, onSuccess, onFail, ...restProps} = props;
    const submitData = async () => {
        const res = await fetch(url, {
            method: method ?? "POST",
            headers: { "Content-Type": contentType ?? "application/json" },
            body: data,
        });

        if (res.ok) {
            const result = await res.json().catch(() => null)
            onSuccess?.(result, res)
            return;
        }
    
        const error = await res.json().catch(() => null)
        onFail?.(error, res)
    }

    return (
        <ActionButton
            {...restProps}
            ref={ref}
            onClick={submitData}
        />
    );}
);

export default SubmitDataButton;