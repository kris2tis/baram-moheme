import { useFormStatus } from "react-dom";
import Button from "../ui/button";
import LoadingButton from "../ui/circle-loading";

export const FollowButton = ({ isFollowed }) => {
  const { pending } = useFormStatus();
  const buttonVariant = isFollowed ? "primary" : "secondary";
  return (
    <Button
      className="flex items-center justify-center h-[45px] transition-colors duration-500 text-secondary-900!"
      variant={buttonVariant}
      type="submit"
      disabled={pending}
    >
      {!pending ? (
        isFollowed ? (
          "دنبال شده"
        ) : (
          "دنبال کردن"
        )
      ) : (
        <LoadingButton
          className={`${isFollowed ? "*:bg-white" : "*:bg-black"}`}
        />
      )}
    </Button>
  );
};
