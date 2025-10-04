"use client";

import Curtain from "@/components/Molecules/Curtains/Curtain";
import TextInput from "@/components/Atoms/Inputs/TextInput";
import EmailInput from "@/components/Atoms/Inputs/EmailInput";
import PasswordInput from "@/components/Atoms/Inputs/PasswordInput";
import SearchInput from "@/components/Atoms/Inputs/SearchInput";
import TelInput from "@/components/Atoms/Inputs/TelInput";
import ColorInput from "@/components/Atoms/Inputs/ColorInput";
import TextAreaInput from "@/components/Atoms/Inputs/TextAreaInput";
import UrlInput from "@/components/Atoms/Inputs/UrlInput";
import DateInput from "@/components/Atoms/Inputs/DateInput";
import DateTimeLocalInput from "@/components/Atoms/Inputs/DateTimeLocalInput";
import MonthInput from "@/components/Atoms/Inputs/MonthInput";
import WeekInput from "@/components/Atoms/Inputs/WeekInput";
import NumberInput from "@/components/Atoms/Inputs/NumberInput";
import RangeInput from "@/components/Atoms/Inputs/RangeInput";
import TimeInput from "@/components/Atoms/Inputs/TimeInput";
import ActionButton from "@/components/Atoms/Buttons/ActionButton";
import HeroIconActionButton from "@/components/Atoms/Buttons/HeroIconActionButton";
import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import SubmitDataButton from "@/components/Atoms/Buttons/SubmitButton";
import CheckBoxInput from "@/components/Atoms/Inputs/CheckBoxInput";
import RadioInput from "@/components/Atoms/Inputs/RadioInput";
import FileInput from "@/components/Atoms/Inputs/File";
import ResetInput from "@/components/Atoms/Inputs/Reset";
import SubmitInput from "@/components/Atoms/Inputs/SubmitInput";
import HiddenInput from "@/components/Atoms/Inputs/HiddenInput";
import RedirectButton from "@/components/Atoms/Buttons/RedirectButton";
import DatePicker from "@/components/Atoms/Inputs/DatePicker";

import { useState } from "react";

export default function Home() {
   const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <main>
      <Curtain id="inputs-demo" buttonClassName="justify-end" className="" childrenWrapperClassName="grid grid-cols-5 my-1 gap-2">
          <TextInput placeholder="Text input" className="" />
          <EmailInput placeholder="E-mail input" className="" />
          <PasswordInput placeholder="Password input" className="" />
          <SearchInput placeholder="Search input" className="" />
          <TelInput placeholder="Telephone input" className="" />
          <ColorInput className="" />
          <TextAreaInput placeholder="TextArea Input" className="" />
          <RangeInput className="" />
          <UrlInput placeholder="Url Input" className="" />
          <NumberInput placeholder="Number Input" className="" />
          <DateInput className="" />
          <DateTimeLocalInput className="" />
          <MonthInput className="" />
          <WeekInput className="" />
          <TimeInput className="" />
          <CheckBoxInput className=""/>
          <RadioInput className=""/>
          <FileInput className=""/>
          <ResetInput className="" />
          <SubmitInput className="" />
          <HiddenInput className="" />
          <DatePicker 
            selected={new Date("2026-11-31")}
          />
      </Curtain>
      <Curtain id="button-demo" buttonClassName="justify-end" className="" childrenWrapperClassName="grid grid-cols-5 my-1 gap-2">
        <RedirectButton
        href={"#"}
        label= "RedirectButton"
        />
        <ActionButton
        onClick={() => alert("Action Button Clicked")}
        label= "ActionButton"
        />
        <HeroIconActionButton
        onClick={() => alert("HeroIconActionButton Clicked")}
        icon={MusicalNoteIcon}
        />
        <SubmitDataButton
        url="/test"
        data='{ "hello": "world" }'
        label= "SubmitDataButton"
        onFail={() => alert("SubmitDataButton Clicked: Failed to submit to url")}
        />
      </Curtain>
    </main>
  );
}

