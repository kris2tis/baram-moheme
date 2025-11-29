import prisma from "../../../../lib/prisma";

export async function POST(request) {
  const { id } = await request.json();
  const post = await prisma.post.findUnique({ where: { id: parseInt(id) } });

  return Response.json(post, { status: 200, message: "پست یافت شد" });
}
