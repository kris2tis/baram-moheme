import { ProfileIcon, ThemeIcon } from "@/shared/assets/icons/icons";
import ExitAccountButton from "@/shared/componetns/common/exit-account-button";
import Image from "next/image";
import Link from "next/link";

const profileNav = [
  { name: "تغییر اطلاعات حساب", icon: ProfileIcon, href: "/account" },
  { name: "تغییر پوسته", icon: ThemeIcon, href: "/theme" },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-y-2.5">
      {profileNav.map((pN, index) => (
        <ProfileNavCard key={index} {...pN} />
      ))}
      <ExitAccountButton />
    </div>
  );
}

const ProfileNavCard = ({ name, href, icon }) => {
  const Icon = icon;
  return (
    <Link href={href}>
      <div className="flex justify-between items-center bg-secondary-900 rounded-md px-3.5 py-2.5">
        <div className="flex gap-x-2.5">
          <Icon iconColor="fill-secondary-100" />
          <span className="text-[12px]">{name}</span>
        </div>
        <div>
          <div className="relative h-2.5 aspect-square">
            <Image
              src={"/assets/icons/left-short-arrow.svg"}
              fill
              alt="left short arrow icon"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
