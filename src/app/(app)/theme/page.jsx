"use client";
import {
  DarkIcon,
  HammerIcon,
  LightIcon,
  SystemIcon,
} from "@/shared/assets/icons/icons";
import Button from "@/shared/componetns/ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";

const themeOptions = [
  { name: "روشن", icon: LightIcon, value: "light" },
  { name: "تاریک", icon: DarkIcon, value: "dark" },
  { name: "سیستم", icon: SystemIcon, value: "system" },
];

export default function Page() {
  const [themeValue, setThemeValue] = useState("dark");
  const { setTheme } = useTheme();
  return (
    <div className="flex flex-col gap-y-4">
      <ThemeOptionList
        setThemeValue={(value) => {
          setThemeValue(value);
        }}
        themeValue={themeValue}
      />
      <Button
        onClick={() => setTheme(themeValue)}
        className="rounded-md! bg-transparent! text-secondary-100 border-secondary-600!"
      >
        <span className="ml-1">اعمال تغییرات</span>
        <HammerIcon iconColor="fill-secondary-100" />
      </Button>
    </div>
  );
}

const ThemeOptionList = ({ setThemeValue, themeValue }) => {
  return (
    <div className="grid grid-cols-3 gap-x-8">
      {themeOptions.map((themeOption, index) => (
        <ThemeOptionCard
          currentTheme={themeValue}
          onClick={(value) => setThemeValue(value)}
          key={index}
          {...themeOption}
        />
      ))}
    </div>
  );
};

const ThemeOptionCard = ({ name, icon, value, onClick, currentTheme }) => {
  const Icon = icon;
  const active = currentTheme === value;
  return (
    <div
      value={value}
      onClick={() => onClick(value)}
      className={`flex flex-col gap-y-2.5 py-5 items-center border ${
        active ? "border-primary-900" : "border-secondary-600 "
      }  rounded-md`}
    >
      <Icon iconColor="fill-secondary-100" />
      <span className="text-[12px]">{name}</span>
    </div>
  );
};
