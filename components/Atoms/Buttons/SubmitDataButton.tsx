"use client"

import cn from '@/utils/cn'
import ActionButton from './ActionButton';

export type SubmitDataButtonProps = {
    url: string,
    data: string,
    label: string,
    method?: string,
    contentType?: string,
    onSucces?: (...args: any[]) => any,
    onFail?: (...args: any[]) => any,
    className?: string
}

const SubmitDataButton = ({url, data, label, className, method, contentType, onSucces, onFail}: SubmitDataButtonProps): React.JSX.Element => {
    const submitData = async () => {
        const res = await fetch(url, {
            method: method ?? "POST",
            headers: { "Content-Type": contentType ?? "application/json" },
            body: data,
        });

        if (res.ok) {
            onSucces?.()
            return;
        };
    
        onFail?.()
    }

    return (
        <ActionButton
            onClick={submitData}
            label={label}
            className={cn("", className)}
        />
    );
}

export default SubmitDataButton;