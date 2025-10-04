"use client"; 

import cn from '@/utils/cn';

export type H2Props = {
    content: string,
    className?: string,
}

const H2 = ({
    content,
    className,
}: H2Props) => {
    return (
        <h2 className={cn("inline-flex text-3xl semi-bold text-primary", className)}>
            {content}
        </h2>
    );
}

export default H2;