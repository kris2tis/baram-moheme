import { auth } from "@/shared/lib/auth";
import prisma from "../../../../lib/prisma";
import { headers } from "next/headers";

export async function GET() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userSessionId = session?.user?.id || "";
  const users = await prisma.user.findMany({
    where: {
      NOT: { id: userSessionId },
    },
  });

  return Response.json({
    message: "لیست کاربران",
    userList: users,
    status: 200,
  });
}
