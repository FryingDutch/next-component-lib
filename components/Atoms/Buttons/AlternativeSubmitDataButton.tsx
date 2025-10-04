"use client"; 

import cn from '@/utils/cn';
import SubmitDataButton, { SubmitDataButtonProps } from './SubmitDataButton';

const AlternativeSubmitDataButton = ({
    className, ...props
}: SubmitDataButtonProps): React.JSX.Element => {
    return (
        <SubmitDataButton 
        {...props}
        className={cn("bg-background border-4 border-primary text-primary hover:bg-primary hover:text-background", className)}
        />
    );
}

export default AlternativeSubmitDataButton;