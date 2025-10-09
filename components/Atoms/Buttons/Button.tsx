"use client";

import cn from '@/utils/cn';
import React, {forwardRef} from 'react';
import {HtmlAtomTypography} from "@/types/typography";

const BASE_BUTTON_CLASSES = "flex justify-center items-center bg-primary text-buttont-primary px-2 py-1 whitespace-nowrap cursor-pointer hover:bg-primary-contrast";
const ALT_BUTTON_CLASSES = "bg-background border-4 border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 ease-in-out button";

export type ButtonComponentProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    TypographyComponent?: React.ComponentType<HtmlAtomTypography> | undefined,
    typographyComponentProps?: HtmlAtomTypography,
    className?: string,
    altButton?: boolean,
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonComponentProps>(
    (props, ref): React.JSX.Element => {
        const {
            TypographyComponent,
            typographyComponentProps,
            className,
            altButton,
            ...restProps
        } = props;

        const Component = 'onClick' in restProps ? 'button' : 'a';
        return (
            <Component
                {...restProps}
                ref={ref as React.RefObject<HTMLButtonElement | HTMLAnchorElement>}
                className={cn(BASE_BUTTON_CLASSES, altButton && ALT_BUTTON_CLASSES, className)}
            >
                {TypographyComponent && <TypographyComponent {...typographyComponentProps} />}
            </Component>
        );}
);

export default Button;