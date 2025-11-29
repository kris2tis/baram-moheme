import prisma from "../../../../lib/prisma";

export async function POST(req) {
  const { commentId, userId } = await req.json();

  if (!userId) {
    const unhorizedMessage = "برای لایک کردن نظر وارد سایت شوید";
    return Response.json(unhorizedMessage, { status: 401 });
  }

  const isLiked = await prisma.like.findUnique({
    where: {
      commentId_userId: { commentId: commentId, userId: userId },
    },
  });

  if (!isLiked) {
    await prisma.like.create({
      data: { commentId: commentId, userId: userId },
    });
    const succesMessage = "با موفقیت لایک شد";
    return Response.json(succesMessage, { status: 200 });
  } else {
    await prisma.like.delete({
      where: { commentId_userId: { commentId: commentId, userId: userId } },
    });
    const succesMessage = "لایک شما برداشته شد";
    return Response.json(succesMessage, { status: 200 });
  }
}
