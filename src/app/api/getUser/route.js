import prisma from "../../../../lib/prisma";

export async function POST(req) {
  const { id } = await req.json();
  const user = await prisma.user.findUnique({
    where: { id: id },
    select: {
      id: true,
      email: true,
      name: true,
      commetnsRecived: true,
      commetnsAuthored: true,
      favoritComments: { include: { likedBy: true, commnet: true } },
      followers: true,
      following: true,
    },
  });

  if (user !== null) {
    return Response.json(user, { status: 200 });
  } else {
    const message = "کاربر پیدا نشد";
    return Response.json(message, { status: 404 });
  }
}
