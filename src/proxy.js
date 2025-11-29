import { NextResponse } from "next/server";
import { auth } from "./shared/lib/auth";
import { headers } from "next/headers";

export default async function Proxy(req) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/", "/users/:path*", "/dashboard"],
};
