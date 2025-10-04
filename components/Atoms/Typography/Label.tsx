"use client"; 

import cn from '@/utils/cn';

export type LabelProps = {
    content: string,
    className?: string,
}

const Label = ({
    content,
    className,
}: LabelProps) => {
    return (
        <label className={cn("inline-flex text-sm font-medium", className)}>
            {content}
        </label>
    );
}

export default Label;