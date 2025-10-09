import { ComponentType, SVGProps } from "react";
import * as React from "react";

export type HeroIconProps = React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;
