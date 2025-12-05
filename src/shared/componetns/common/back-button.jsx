"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Back() {
  const { back } = useRouter();
  return (
    <div onClick={back} className="relative h-5 aspect-square flex ">
      <Image src={"/assets/icons/back.svg"} fill alt="navigation icon" />
    </div>
  );
}
