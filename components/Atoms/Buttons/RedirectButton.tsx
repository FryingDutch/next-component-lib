import cn from '@/utils/cn';

export type RedirectButtonProps = {
    href: string,
    label: string,
    className?: string,
}

const RedirectButton = ({
    href,
    label,
    className,
}: RedirectButtonProps) => {
    return (
        <a 
            href={href} 
            className={cn("inline-flex items-center justify-center bg-primary text-buttont-primary px-2 py-1 whitespace-nowrap", className)}>
            {label}
        </a>
    );
}

export default RedirectButton;