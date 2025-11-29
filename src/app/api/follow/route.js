import prisma from "../../../../lib/prisma";

export async function POST(req) {
  const { followerId, followingId } = await req.json();
  console.log("________", followerId, followingId);

  if (!followerId || !followingId) {
    const unhorizedMessage = "برای  دنبال کردن  وارد سایت شوید";
    return Response.json(unhorizedMessage, { status: 401 });
  }

  const isFollowed = await prisma.follow.findUnique({
    where: {
      followerId_followingId: {
        followerId: followerId,
        followingId: followingId,
      },
    },
  });

  if (!isFollowed) {
    await prisma.follow.create({
      data: { followerId: followerId, followingId: followingId },
    });
    const succesMessage = "دنبال شد";
    return Response.json(succesMessage, { status: 200 });
  } else {
    await prisma.follow.delete({
      where: {
        followerId_followingId: {
          followerId: followerId,
          followingId: followingId,
        },
      },
    });
    const succesMessage = "دیگر دنبال نمیکنید";
    return Response.json(succesMessage, { status: 200 });
  }
}
