import prisma from "../../../../lib/prisma";

export async function POST(req) {
  const { id, authorId } = await req.json();

  const isFollowed = await prisma.follow.findUnique({
    where: {
      followerId_followingId: { followerId: authorId, followingId: id },
    },
  });

  const user = await prisma.user.findUnique({
    where: { id: id },
    include: {
      _count: { select: { following: true, followers: true } },
      commetnsRecived: {
        orderBy: { likes: { _count: "desc" } },
        include: { likes: { select: { likedBy: { select: { id: true } } } } },
      },
    },
  });

  const commetnsRecived = user.commetnsRecived.map((c) => {
    const isLiked = c.likes.some(({ likedBy }) => likedBy.id === authorId);

    return { ...c, isLiked: isLiked };
  });

  const data = {
    ...user,
    commetnsRecived: commetnsRecived,
    isFollowed: isFollowed ? true : false,
  };
  if (user !== null) {
    return Response.json(data, { status: 200 });
  } else {
    const message = "کاربر پیدا نشد";
    return Response.json(message, { status: 404 });
  }
}
