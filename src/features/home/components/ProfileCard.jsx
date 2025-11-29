import Link from "next/link";

export default function ProfileCard({ id, name, email }) {
    console.log(id)
  return (
    <div key={id} className=" flex flex-col gap-y-3 items-center py-2">
      <Link href={`/users/${id}`}>
        <div className="size-20 bg-gray-600 rounded-full"></div>
      </Link>
      <div>
        <span className="text-[14px]">{name}</span>
      </div>
    </div>
  );
}
