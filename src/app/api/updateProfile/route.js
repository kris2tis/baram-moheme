import prisma from "../../../../lib/prisma";

export async function POST(req) {
  const body = await req.json();
  const data = {
    name: body.name,
    email: body.email,
  };
  try {
    await prisma.user.update({
      where: { id: body.id },
      data: data,
    });

    return Response.json("اطلاعات ذخیره شد", { status: 200 });
  } catch (error) {
    return Response.json("اطلاعات بروز نشد", { status: 500 });
  }
}
