"use client";

import { addCommentApi } from "@/services/commentServices";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function AddComment({ reciverId, authorId }) {
  const [isHidden, setIsHidden] = useState(false);
  const { refresh } = useRouter();
  const addCommentHandler = async (e) => {
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
      setIsHidden(false);
    } catch (error) {
      const errorMessage = error.response.data;
      console.log(error)
      toast.error(errorMessage);
    }
  };
  return authorId ? (
    <div className="flex flex-col gap-y-3 w-full">
      {!isHidden && (
        <button
          onClick={() => setIsHidden(true)}
          className="bg-gray-700 p-2 rounded-md text-[12px]"
        >
          افزودن نظر
        </button>
      )}

      {isHidden && (
        <form onSubmit={addCommentHandler}>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="content">
              {" "}
              <span className="text-[12px]">متن نظر</span>
            </label>
            <textarea
              name="content"
              className="border border-gray-700 focus:ring-0 focus:outline-0 rounded-md"
            />
          </div>
          <div className="flex gap-x-2">
            <button
              type="submit"
              className="bg-green-700 p-2 rounded-md text-[12px] mt-2 w-full"
            >
              ارسال نظر
            </button>
            <button
              onClick={() => setIsHidden(false)}
              type="button"
              className="bg-red-700 p-2 rounded-md text-[12px] mt-2 w-full"
            >
              لغو ارسال
            </button>
          </div>
        </form>
      )}
    </div>
  ) : (
    <span>برای افزودن نظر باید وارد شوید</span>
  );
}
