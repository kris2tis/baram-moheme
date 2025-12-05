"use client";

import Image from "next/image";
import { useFormStatus } from "react-dom";
import Button from "../ui/button";

export const LikeCommentButton = ({ isLiked }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      className={`${
        pending && "animate-pulse"
      }   aspect-square cursor-pointer bg-transparent! border-transparent! w-max h-max p-0! rounded-md transition-colors duration-500`}
    >
      <Image
        src={`/assets/icons/${isLiked ? "liked" : "un-like"}.svg`}
        width={12}
        height={12}
        alt="like icon"
      />
    </Button>
  );
};
