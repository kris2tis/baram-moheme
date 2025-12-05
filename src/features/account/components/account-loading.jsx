import Skleton from "@/shared/componetns/ui/skleton";

export default function AccountLoading() {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <Skleton className="size-20 aspect-square rounded-full" />
      <div className="flex flex-col gap-y-5 w-full">
        <div className="flex  flex-col gap-y-3">
          <Skleton className="h-4  w-1/4" />
          <Skleton className="h-12 rounded-full w-full" />
        </div>
        <div className="flex  flex-col gap-y-3">
          <Skleton className="h-4  w-1/4" />
          <Skleton className="h-12 rounded-full w-full" />
        </div>
        <Skleton className="h-12 rounded-full w-full" />
      </div>
    </div>
  );
}
