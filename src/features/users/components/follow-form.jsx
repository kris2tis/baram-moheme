"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { FollowButton } from "@/shared/componetns/common/follow-button";
import { follow } from "../action/action";

export default function FollowForm({ data }) {
  const followUserWithData = follow.bind(null, data);
  const [state, action] = useActionState(followUserWithData, null);
  const { isFollowed } = data;
  const { refresh } = useRouter();

  useEffect(() => {
    if (state?.succesMessage) {
      toast.success(state.succesMessage);
      refresh();
    } else if (state?.errorMessage) {
      refresh();

      toast.error(state);
    }
  }, [state]);
  return (
    <form className="w-full" action={action}>
      <FollowButton isFollowed={isFollowed} />
    </form>
  );
}
