"use client"; 

import cn from '@/utils/cn';

export type BodyLargeTextProps = {
    content: string,
    className?: string,
}

const BodyLargeText = ({
    content,
    className,
}: BodyLargeTextProps) => {
    return (
        <div className={cn("inline-flex text-base font-normal", className)}>
            {content}
        </div>
    );
}

export default BodyLargeText;