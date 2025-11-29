import MessageList from "@/features/comments/components/MessageList";
import { Suspense } from "react";

export default function MessagePage() {
  return (
    <div>
      <h1 className="mb-4"> پیغامات</h1>
      <Suspense fallback={<span>درحال گرفتن پیغام ها</span>}>
        <MessageList />
      </Suspense>
    </div>
  );
}
