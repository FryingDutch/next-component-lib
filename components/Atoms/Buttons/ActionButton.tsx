"use client"; 

import cn from '@/utils/cn';

export type ActionButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void> | void,
    label: string,
    className?: string,
}

const ActionButton = ({
    onClick,
    label,
    className,
}: ActionButtonProps) => {
    return (
        <button 
            onClick={onClick} 
            className={cn("inline-flex items-center justify-center bg-primary text-buttont-primary px-2 py-1 whitespace-nowrap", className)}
        >
            {label}
        </button>
    );
}

export default ActionButton;