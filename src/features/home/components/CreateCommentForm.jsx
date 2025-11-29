"use client";

import { createComment } from "@/services/commentServices";
import { toast } from "sonner";

export default function CreateCommentForm() {
  return (
    <form
      className="flex flex-col gap-y-3"
      onSubmit={async (e) => {
        e.preventDefault();
        const data = {
          content: e.currentTarget.content.value,
          authorId: e.currentTarget.authorId.value,
          reciverId: e.currentTarget.reciverId.value,
        };
        try {
          const { message } = await createComment(data);
          toast.success(message);
        } catch (error) {
          const errorMessage = error.response.data[0];
          toast.error(errorMessage);
        }
      }}
    >
      <input
        name="content"
        type="text"
        placeholder="نظر"
        className="border border-white p-2 rounded-md"
      />
      <input
        name="authorId"
        placeholder="آیدی فرستنده دهنده"
        className="border border-white p-2 rounded-md"
      />
      <input
        name="reciverId"
        type="number"
        placeholder="آیدی گیرنده نظر"
        className="border border-white p-2 rounded-md"
      />
      <button type="submit" className="bg-orange-400 p-2 rounded-md text-black">
        ارسال پیغام
      </button>
    </form>
  );
}
