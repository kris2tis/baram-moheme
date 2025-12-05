import Link from "next/link";
import { getAllMessage } from "../../../services/commentServices";

export const CommentList = async () => {
  const messages = await getAllMessage();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
      {messages.map((c) => (
        <CommentCard key={c.id} {...c} />
      ))}
    </div>
  );
};

function CommentCard({ content, id }) {
  return (
    <div
      className="flex flex-col gap-y-3 justify-between border border-[#272727] py-2 px-3 rounded-md"
      key={id}
    >
      <span className="text-justify">{content.slice(0, 50)} ...</span>
      <Link href={`/messages/${id}`}>
        <span className="text-[12px] text-[#b9b9b9]">مشاهده کامل</span>
      </Link>
    </div>
  );
}
