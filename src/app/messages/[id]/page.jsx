import { getMessage } from "@/services/commentServices";

export default async function page({ params }) {
  const { id } = await params;
  const data = await getMessage(id);

  return data?.id ? (
    <div className="flex flex-col gap-y-3 p-2 ">
      <span>{data.title}</span>
      <span className="text-justify">{data.content}</span>
    </div>
  ) : (
    <span>پستی یافت نشد</span>
  );
}
