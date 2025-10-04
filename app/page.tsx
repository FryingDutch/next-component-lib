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
import ReactTimePicker from "@/components/Atoms/Inputs/ReactTimeInput"

import { useState } from "react";
import ParagraphTitle from "@/components/Atoms/Typography/H1";
import Paragraph from "@/components/Atoms/Typography/Paragraph";
import H1 from "@/components/Atoms/Typography/H1";
import H2 from "@/components/Atoms/Typography/H2";
import H3 from "@/components/Atoms/Typography/H3";
import H4 from "@/components/Atoms/Typography/H4";
import H5 from "@/components/Atoms/Typography/H5";
import H6 from "@/components/Atoms/Typography/H6";
import BodyLargeText from "@/components/Atoms/Typography/BodyLargeText";
import BodySmallText from "@/components/Atoms/Typography/BodySmallText";
import Label from "@/components/Atoms/Typography/Label";
import Overline from "@/components/Atoms/Typography/Overline";
import Caption from "@/components/Atoms/Typography/Caption";

export default function Home() {
   const [startDate, setStartDate] = useState<Date | null>(new Date());
   const [time, setTime] = useState("12:00");

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
          <DatePicker selected={new Date('04/11/2025')} />
          <ReactTimePicker

          />
      </Curtain>
      <Curtain id="native" buttonClassName="justify-end" className="" childrenWrapperClassName="grid grid-cols-5 my-1 gap-2">
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
      <Curtain id="native" buttonClassName="justify-end" className="" childrenWrapperClassName="grid grid-cols-6 my-1 gap-2">
        <H1 content= "This is a <H1>"/>
        <H2 content= "This is a <H2>"/>
        <H3 content= "This is a <H3>"/>
        <H4 content= "This is a <H4>"/>
        <H5 content= "This is a <H5>"/>
        <H6 content= "This is a <H6>"/>
        <BodyLargeText content= "This is a BodyLargeText: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
        <BodySmallText content= "This is a BodySmallText: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
        <Label content= "This is a Label"/>
        <Overline content= "This is a Overline"/>
        <Caption content= "This is a Caption"/>
      </Curtain>
      <Curtain id="native" buttonClassName="justify-end" className="" childrenWrapperClassName="grid grid-cols-6 my-1 gap-2">
        <H1 content= "This is a <H1>"/>
        <H2 content= "This is a <H2>"/>
        <H3 content= "This is a <H3>"/>
        <H4 content= "This is a <H4>"/>
        <H5 content= "This is a <H5>"/>
        <H6 content= "This is a <H6>"/>
        <BodyLargeText content= "This is a BodyLargeText: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
        <BodySmallText content= "This is a BodySmallText: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
        <Label content= "This is a Label"/>
        <Overline content= "This is a Overline"/>
        <Caption content= "This is a Caption"/>
      </Curtain>
    </main>
  );
}

