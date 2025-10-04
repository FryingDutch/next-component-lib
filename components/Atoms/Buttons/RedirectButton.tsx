import cn from '@/utils/cn';
import { useId } from 'react';

export type RedirectButtonProps = {
    href: string,
    label: string,
    className?: string,
}

const RedirectButton = ({
    href,
    label,
    className,
}: RedirectButtonProps): React.JSX.Element => {
    const id = 'button_' + useId();
    return (
        <a  
            id={id}
            href={href} 
            className={cn("inline-flex items-center justify-center bg-primary px-2 py-1 whitespace-nowrap cursor-pointer text-buttont-primary hover:bg-primary-contrast", className)}>
            {label}
        </a>
    );
}

export default RedirectButton;