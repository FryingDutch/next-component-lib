import cn from '@/utils/cn';
import React, {forwardRef} from 'react';
import {BaseButtonProps} from "@/types/buttons";

export type RedirectButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & BaseButtonProps & {
    label: string,
}

const RedirectButton = forwardRef<HTMLAnchorElement, RedirectButtonProps>((props, ref) => {
    const {label, className, altButton = false, ...restProps} = props;
    return (
        <a {...restProps} ref={ref} className={cn("inline-flex items-center justify-center bg-primary px-2 py-1 whitespace-nowrap cursor-pointer hover:bg-primary-contrast", !altButton ? "text-buttont-primary" : "text-primary hover:text-buttont-primary bg-background border-4 border-primary hover:bg-primary transition-colors duration-300 ease-in-out button", className)}>
            {label}
        </a>
    );}
)

export default RedirectButton;