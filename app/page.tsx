"use client";
import { useState } from "react";
import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import { SquaresPlusIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";

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
import SubmitDataButton from "@/components/Atoms/Buttons/SubmitDataButton";
import CheckBoxInput from "@/components/Atoms/Inputs/CheckBoxInput";
import RadioInput from "@/components/Atoms/Inputs/RadioInput";
import FileInput from "@/components/Atoms/Inputs/File";
import ResetInput from "@/components/Atoms/Inputs/Reset";
import SubmitInput from "@/components/Atoms/Inputs/SubmitInput";
import HiddenInput from "@/components/Atoms/Inputs/HiddenInput";
import RedirectButton from "@/components/Atoms/Buttons/RedirectButton";
import ReactDatePicker from "@/components/Atoms/Inputs/ReactDatePicker";
import ReactTimePicker from "@/components/Atoms/Inputs/ReactTimeInput"

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

import LabeledTextInput from "@/components/Molecules/Inputs/LabeledTextInput";
import LabeledCheckBoxInput from "@/components/Molecules/Inputs/LabeledCheckBoxInput";
import LabeledEmailInput from "@/components/Molecules/Inputs/LabeledEmailInput";
import LabeledPasswordInput from "@/components/Molecules/Inputs/LabeledPasswordInput";
import LabeledSearchInput from "@/components/Molecules/Inputs/LabeledSearchInput";
import LabeledTelInput from "@/components/Molecules/Inputs/LabeledTelInput";
import LabeledColorInput from "@/components/Molecules/Inputs/LabeledColorInput";
import LabeledRangeInput from "@/components/Molecules/Inputs/LabeledRangeInput";
import LabeledUrlInput from "@/components/Molecules/Inputs/LabeledUrlInputs";
import LabeledNumberInput from "@/components/Molecules/Inputs/LabeledNumberInput";
import LabeledDateInput from "@/components/Molecules/Inputs/LabeledDateInput";
import LabeledDateTimeLocalInput from "@/components/Molecules/Inputs/LabeledDateTimeLocal";
import LabeledMonthInput from "@/components/Molecules/Inputs/LabeledMonthInput";
import LabeledWeekInput from "@/components/Molecules/Inputs/LabeledWeekInput";
import LabeledTimeInput from "@/components/Molecules/Inputs/LabeledTimeInput";
import LabeledRadioInput from "@/components/Molecules/Inputs/LabeledRadioInput";
import LabeledFileInput from "@/components/Molecules/Inputs/LabeledFileInput";
import LabeledResetInput from "@/components/Molecules/Inputs/LabeledResetButton";
import LabeledSubmitInput from "@/components/Molecules/Inputs/LabeledSubmitInput";
import LabeledReactDatePicker from "@/components/Molecules/Inputs/LabeledReactDatePicker";
import LabeledReactTimePicker from "@/components/Molecules/Inputs/LabeledReactTimeInput";

import LabeledActionButton from "@/components/Molecules/Buttons/LabeledActionButton";
import LabeledSubmitDataButton from "@/components/Molecules/Buttons/LabeledSubmitDataButton";
import LabeledRedirectButton from "@/components/Molecules/Buttons/LabeledRedirectButton";
import LabeledHeroIconActionButton from "@/components/Molecules/Buttons/LabeledHeroIconActionButton";
import HeroIconTextButton from "@/components/Atoms/Buttons/HeroIconTextButton";
import LabeledHeroIconTextButton from "@/components/Molecules/Buttons/LabeledHeroIconTextButton";

export default function Home() {
   const [startDate, setStartDate] = useState<Date | null>(new Date());
   const [time, setTime] = useState("12:00");

  return (
    <main>
      <Curtain id="atoms-inputs" label="Atoms / Inputs" buttonClassName="justify-end" className="" childrenWrapperClassName="grid grid-cols-5 my-1 gap-2">
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
          <ReactDatePicker selected={new Date('04/11/2025')} />
          <ReactTimePicker/>
          <CheckBoxInput className=""/>
          <RadioInput className=""/>
          <FileInput className=""/>
          <ResetInput className="" />
          <SubmitInput className="" />
          <HiddenInput className="" />
      </Curtain>
      <Curtain id="atoms-buttons" label="Atoms / Buttons" buttonClassName="justify-end" className="" childrenWrapperClassName="grid grid-cols-5 my-1 gap-2">
        <RedirectButton
        href={"#"}
        label= "Redirect Button"
        />
        <ActionButton
        onClick={() => alert("Action Button Clicked")}
        label= "Action Button"
        />
        <HeroIconActionButton
        onClick={() => alert("HeroIconActionButton Clicked")}
        icon={MusicalNoteIcon}
        />
        <HeroIconTextButton
        onClick={() => alert("HeroIconTextButton Clicked")}
        icon={CommandLineIcon}
        label="HeroIcon Text Button"
        />
        <SubmitDataButton
        url="https://nextenv-lib-api.ddev.site/test/submit-data-button"
        data='{ "label": "atom/submit-button/fail" }'
        label= "Submit Data Button"
        onFail={(error) => alert(JSON.stringify(error))}
        />
        <RedirectButton
        href={"#"}
        label="Alternative Redirect Data Button"
        altButton={true}
        />
        <ActionButton
        onClick={() => alert("Action Button Clicked")}
        label= "Alternative Action Button"
        altButton={true}
        />
        <HeroIconActionButton
        onClick={() => alert("Alternative HeroIconActionButton Clicked")}
        icon={SquaresPlusIcon}
        altButton={true}
        />
        <HeroIconTextButton
        onClick={() => alert("HeroIconTextutton Clicked")}
        icon={ComputerDesktopIcon}
        label="Alt HeroIcon Text Button"
        altButton={true}
        />
        <SubmitDataButton
        url="/test"
        data='{ "hello": "world" }'
        label= "Alternative Submit Data Button"
        onFail={() => alert("Alternative SubmitDataButton Clicked: Failed to submit to url")}
        altButton={true}
        />
      </Curtain>
      <Curtain id="atoms-typography" label="Atoms / Typography" buttonClassName="justify-end" className="" openClassName="max-h-130" childrenWrapperClassName="grid grid-cols-6 my-1 gap-2">
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
      <Curtain id="molecules-inputs" label="Molecules / Inputs" buttonClassName="justify-end" className="" childrenWrapperClassName="grid grid-cols-5 my-1 gap-2">
        <LabeledTextInput label="Labeled Text Input" />
        <LabeledEmailInput label="Labeled Email Input" />
        <LabeledPasswordInput label="Labeled Password Input" />
        <LabeledSearchInput label="Labeled Search Input" />
        <LabeledTelInput label="Labeled Tel Input" />
        <LabeledColorInput label="Labeled Color Input" />
        <LabeledRangeInput label="Labeled Range Input" />
        <LabeledUrlInput label="labeled URL Input" />
        <LabeledNumberInput label="Labeled Number Input" />
        <LabeledDateInput label="Labeled Date Input" />
        <LabeledDateTimeLocalInput label="Labeled DateTimeLocal Input" />
        <LabeledDateInput label="Labeled Date Input" />
        <LabeledMonthInput label="Labeled Month Input" />
        <LabeledWeekInput label="Labeled Week Input" />
        <LabeledTimeInput label="Labeled Time Input" />
        <LabeledCheckBoxInput label="Labeled CheckBox Input" />
        <LabeledRadioInput label="Labeled Radio Input" />
        <LabeledFileInput label="Labeled File Input" />
        <LabeledResetInput label="Labeled Reset Input" />
        <LabeledSubmitInput label="Labeled Submit Input" />
        <LabeledReactDatePicker label="Labeled React DatePicker"/>
        <LabeledReactTimePicker label="Labeled React TimePicker"/>
      </Curtain>
      <Curtain id="molecules-buttons" label="Molecules / Buttons" buttonClassName="justify-end" className="" childrenWrapperClassName="grid grid-cols-5 my-1 gap-2">
        <LabeledRedirectButton href="#" label="This is a Labeled Redirect Button" buttonLabel="Labeled Redirect Button"/>
        <LabeledActionButton 
        onClick={() => alert("Labeled Action Button Clicked")}
        label="This is a Labeled Action Button" 
        buttonLabel="Labeled Action Button"
        />
        <LabeledHeroIconActionButton 
        onClick={() => alert("Labeled HeroIcon Action Button Clicked")}
        label="This is a HeroIcon Action Button" 
        icon={PhoneIcon}
        />
        <LabeledHeroIconTextButton
        onClick={() => alert("Alternative Labeled HeroIcon Action Button Clicked")}
        label="This is a Alternative HeroIcon Action Button"
        buttonLabel="Alt Icon Text Button"
        icon={EnvelopeIcon}
        />
        <LabeledSubmitDataButton 
        label="This is a Labeled Submit Data Button" 
        buttonLabel="Labeled Submit Data Button"
        url="/test"
        data='{ "hello": "world" }'
        onFail={() => alert("SubmitDataButton Clicked: Failed to submit to url")}
        />
        <LabeledRedirectButton href="#" label="This is a Alternative Labeled Redirect Button" buttonLabel="Alternative Labeled Redirect Button" altButton={true}/>
        <LabeledActionButton 
        onClick={() => alert("Alternative Labeled Action Button Clicked")}
        label="This is a Labeled Action Button" 
        buttonLabel="Labeled Action Button"
        altButton={true}
        />
        <LabeledHeroIconActionButton 
        onClick={() => alert("Alternative Labeled HeroIcon Action Button Clicked")}
        label="This is a Alternative HeroIcon Action Button" 
        icon={EnvelopeIcon}
        altButton={true}
        />
        <LabeledHeroIconTextButton
        onClick={() => alert("Alternative Labeled HeroIcon Action Button Clicked")}
        label="This is a Alternative HeroIcon Action Button"
        buttonLabel="Alt Icon Text Button"
        icon={EnvelopeIcon}
        altButton={true}
        />
        <LabeledSubmitDataButton 
        label="This is a Alternative Labeled Submit Data Button" 
        buttonLabel="Alternative Labeled Submit Data Button"
        url="/test"
        data='{ "hello": "world" }'
        onFail={() => alert("Alternative SubmitDataButton Clicked: Failed to submit to url")}
        altButton={true}
        />
      </Curtain>
    </main>
  );
}

