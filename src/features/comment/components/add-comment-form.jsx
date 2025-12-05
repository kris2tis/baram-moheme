"use client";

import { addCommentApi } from "@/services/commentServices";
import Button from "@/shared/componetns/ui/button";
import CircleLoading from "@/shared/componetns/ui/circle-loading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const AddCommentForm = ({ reciverId, authorId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");
  const { refresh } = useRouter();
  const addCommentHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      content: e.currentTarget.content.value,
      authorId: authorId,
      reciverId: reciverId,
    };

    try {
      const { message } = await addCommentApi(data);
      toast.success(message);
      refresh();
      setIsLoading(false);
      setContent("");
      window.scroll(0, document.body.scrollHeight);
    } catch (error) {
      setIsLoading(false);
      setContent("");

      const errorMessage = error.response.data;
      toast.error(errorMessage || "خظا");
    }
  };
  return authorId ? (
    <form
      className="w-full flex items-center gap-x-2.5"
      onSubmit={addCommentHandler}
    >
      <div className={`${content ? "w-10/12" : "w-full"}  h-12`}>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          autoComplete="off"
          name="content"
          className="w-full border bg-[#151515cc] backdrop-blur-md border-white h-full px-2.5 pr-5"
          placeholder="افزودن نظر"
        />
      </div>
      {content && (
        <div className="w-2/12 h-12 ">
          <Button disabled={isLoading} variant="primary" className="h-full">
            {isLoading ? (
              <div className="h-full flex items-center">
                <CircleLoading className="*:bg-white" />
              </div>
            ) : (
              <div className="relative h-5 aspect-square">
                <Image src={"/assets/icons/done.svg"} fill alt="done icon" />
              </div>
            )}
          </Button>
        </div>
      )}
    </form>
  ) : (
    <span>برای افزودن نظر باید وارد شوید</span>
  );
};
