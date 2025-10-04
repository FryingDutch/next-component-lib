"use client"; 

import cn from '@/utils/cn';
import ActionButton, { ActionButtonProps } from './ActionButton';

const AlternativeActionButton = ({
    className,
    ...props
}: ActionButtonProps): React.JSX.Element => {
    return (
        <ActionButton 
        {...props}
        className={cn("bg-background border-4 border-primary text-primary hover:bg-primary hover:text-background", className)}
        />
    );
}

export default AlternativeActionButton;