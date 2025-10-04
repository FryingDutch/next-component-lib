"use client"; 

import cn from '@/utils/cn';
import RedirectButton, { RedirectButtonProps } from './RedirectButton';

const AlternativeRedirectButton = ({
    className,
    ...props
}: RedirectButtonProps): React.JSX.Element => {
    return (
        <RedirectButton
        {...props}
        className={cn("bg-background border-4 border-primary text-primary hover:bg-primary hover:text-background", className)}
        />
    );
}

export default AlternativeRedirectButton;