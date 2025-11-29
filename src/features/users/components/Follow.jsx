"use client";

import { toast } from "sonner";
import { followApi } from "../services/followServices";

export default function Follow({ data }) {
  const followHandler = async () => {
    console.log(data);

    try {
      const message = await followApi(data);
      toast.message(message);
    } catch (error) {
      const errorMessage = error?.response?.data;
      toast.error(errorMessage);
    }
  };
  return (
    <button className="w-full text-[12px]" onClick={followHandler}>
      فالو کردن
    </button>
  );
}
