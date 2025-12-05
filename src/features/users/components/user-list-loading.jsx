export default function UserLoading() {
  return (
    <div className="grid grid-cols-4 gap-x-2.5 py-2.5" >
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );
}

const LoadingCard = () => {
  return (
    <div className="flex flex-col items-center gap-y-2.5">
      <div className="animate-pulse size-12 rounded-full bg-secondary-400"></div>
      <div className="animate-pulse w-full h-2.5 rounded-md bg-secondary-400 "></div>
    </div>
  );
};
