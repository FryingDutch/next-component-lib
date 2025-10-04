"use client"; 

import cn from '@/utils/cn';

export type H4Props = {
    content: string,
    className?: string,
}

const H4 = ({
    content,
    className,
}: H4Props) => {
    return (
        <h4 className={cn("inline-flex text-xl font-medium", className)}>
            {content}
        </h4>
    );
}

export default H4;