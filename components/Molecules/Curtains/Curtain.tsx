"use client";

import cn from "@/utils/cn";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import HeroIconActionButton from "@/components/Atoms/Buttons/HeroIconActionButton";
import { HeroIcon } from "@/types/icons";

export type CurtainProps = {
  id?: string;
  icon?: HeroIcon;
  className?: string;
  curtainClassName?: string;
  childrenWrapperClassName?: string;
  buttonClassName?: string;
  children: React.ReactNode;
};

const Curtain = ({
  id,
  icon: HeroIcon,
  className,
  curtainClassName,
  childrenWrapperClassName,
  buttonClassName,
  children,
}: CurtainProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div id={id} className={cn("flex flex-col", className)}>
      <HeroIconActionButton
        icon={HeroIcon ? HeroIcon : Bars3Icon}
        onClick={() => setOpen(!open)}
        className={cn("border-y border-primary-contrast text-buttont-primary", buttonClassName)}
        />
      <div className={cn(`transition-all duration-300 overflow-hidden origin-top bg-background ${open ? "max-h-96" : "max-h-0"}`, curtainClassName)}>
        <div className={cn("", childrenWrapperClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Curtain;

