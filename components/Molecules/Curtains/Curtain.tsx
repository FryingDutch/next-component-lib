"use client";

import cn from "@/utils/cn";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import HeroIconActionButton from "@/components/Atoms/Buttons/HeroIconActionButton";
import { HeroIcon } from "@/types/icons";
import H3 from "@/components/Atoms/Typography/H3";

export type CurtainProps = {
  id?: string;
  label?: string;
  icon?: HeroIcon;
  className?: string;
  curtainClassName?: string;
  childrenWrapperClassName?: string;
  buttonClassName?: string;
  openClassName?: string;
  closedClassName?: string;
  children: React.ReactNode;
};

const Curtain = ({
  id,
  label,
  icon: HeroIcon,
  className,
  curtainClassName,
  childrenWrapperClassName,
  buttonClassName,
  openClassName,
  closedClassName,
  children,
}: CurtainProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div id={id} className={cn("flex flex-col", className)}>
      <div className="flex flex-row border-y border-primary-contrast text-buttont-primary bg-primary z-10 justify-center items-center">
        <HeroIconActionButton
          icon={HeroIcon ? HeroIcon : Bars3Icon}
          onClick={() => setOpen(!open)}
          className={cn("w-full z-20", buttonClassName)}
          />
          {label && (<H3 content={label} className="absolute content-center text-white z-30"/>)}
      </div>
      <div className={cn(`transition-all duration-300 overflow-hidden origin-top bg-background`, (cn(open ? "max-h-96" : "", openClassName)), (cn(open ? "" : "max-h-0", closedClassName)), curtainClassName)}>
        <div className={cn("", childrenWrapperClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Curtain;

