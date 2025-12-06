import ExitAccountButton from "@/shared/componetns/common/exit-account-button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-2.5">
      <ProfileNavCard />
      <ExitAccountButton />
    </div>
  );
}

const ProfileNavCard = () => {
  return (
    <Link href={"/account"}>
    <div className="flex justify-between items-center bg-secondary-800 rounded-md px-3.5 py-2.5">
      <div className="flex gap-x-2.5">
        <div className="relative h-4 aspect-square">
          <Image src={"/assets/icons/profile.svg"} fill alt="account icon" />
        </div>
        <span className="text-[12px]">تغییر اطلاعات حساب</span>
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
