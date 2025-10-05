"use client"; 

import cn from '@/utils/cn';
import { useId } from 'react';

export type ActionButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void> | void,
    label: string,
    className?: string,
    altButton?: boolean,
}

const ActionButton = ({
    onClick,
    label,
    className,
    altButton = false
}: ActionButtonProps): React.JSX.Element => {
    const id = 'button_' + useId();
    return (
        <button 
            id={id}
            onClick={onClick} 
            className={cn("inline-flex items-center justify-center bg-primary px-2 py-1 whitespace-nowrap cursor-pointer text-buttont-primary hover:bg-primary-contrast", (altButton == false) ? "" : "bg-background border-4 border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 ease-in-out button", className)}
        >
            {label}
        </button>
    );
}

export default ActionButton;