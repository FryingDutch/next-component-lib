"use client"; 

import cn from '@/utils/cn';

export type H5Props = {
    content: string,
    className?: string,
}

const H5 = ({
    content,
    className,
}: H5Props) => {
    return (
        <h5 className={cn("inline-flex text-lg font-medium text-primary", className)}>
            {content}
        </h5>
    );
}

export default H5;