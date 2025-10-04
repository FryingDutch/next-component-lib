"use client"; 

import cn from '@/utils/cn';
import { useId } from 'react';

export type ActionButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void> | void,
    label: string,
    className?: string,
}

const ActionButton = ({
    onClick,
    label,
    className,
}: ActionButtonProps): React.JSX.Element => {
    const id = 'button_' + useId();
    return (
        <button 
            id={id}
            onClick={onClick} 
            className={cn("inline-flex items-center justify-center bg-primary px-2 py-1 whitespace-nowrap cursor-pointer text-buttont-primary hover:bg-primary-contrast", className)}
        >
            {label}
        </button>
    );
}

export default ActionButton;