"use client";

import Link from "next/link";
import Back from "../common/back-button";
import { HomeIcon, ProfileIcon } from "@/shared/assets/icons/icons";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", icon: HomeIcon, title: "خانه" },
  { href: "/account", icon: ProfileIcon, title: "پروفایل" },
];

export default function AppNavigation() {
  return (
    <div className="w-full flex items-center gap-x-2.5 h-16">
      <div className="w-10/12 h-full border bg-[#151515cc] backdrop-blur-md border-[#ffffff1f] rounded-full flex items-center gap-x-12 px-6 ">
        {navigation.map((nav, index) => (
          <NavigatinoCard key={index} {...nav} />
        ))}
      </div>
      <div className="w-2/12  h-full border bg-[#151515cc] backdrop-blur-md border-[#ffffff1f] rounded-full flex items-center justify-center">
        <Back />
      </div>
    </div>
  );
}

function NavigatinoCard({ icon, href, title }) {
  const pathname = usePathname();
  const active = pathname === href;
  const NavIcon = icon;
  return (
    <div className="flex flex-col items-center gap-y-2">
      <Link href={href}>
        <NavIcon
          iconColor={`${active ? "fill-white" : "fill-secondary-400"}`}
        />
      </Link>
      <span className="text-[10px]">{title}</span>
    </div>
  );
}
