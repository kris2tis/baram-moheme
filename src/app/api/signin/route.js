import { cookies } from "next/headers";
import * as zod from "zod";
import prisma from "../../../../lib/prisma";

const signinSchema = zod.object({
  fullName: zod
    .string("نام ونام خانوادگی الزامی است")
    .min(3, "نام و نام خانوادگی  خیلی کوتاهه حداقل 3 کارکتر"),
  email: zod.email("ایمیل معتبر نیست !"),
});
export async function POST(req) {
  const cookiesStore = await cookies();
  const data = await req.json();
  const fullName = data.fullName;
  const email = data.email;

  const signinValidation = signinSchema.safeParse({
    fullName: fullName,
    email: email,
  });

  if (!signinValidation.success) {
    const { fieldErrors } = zod.flattenError(signinValidation.error);
    let errors = [];
    for (const key in fieldErrors) {
      errors.push(fieldErrors[key]);
    }
    return Response.json(errors[0], { status: 400 });
  } else {
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (!user) {
      const message = ` خوش امدی به وب سایت ما`;

      await prisma.user.create({
        data: {
          fullName: fullName,
          email: email,
        },
      });

      cookiesStore.set("accessToken", "sdfksdfbksdf8754tbkzd", {
        maxAge: 999999,
        httpOnly: true,
        secure: true,
        path: "/",
        sameSite: "lax",
      });
      cookiesStore.set("refreshToken", "sdfksdfbksdf8754tbkzd", {
        maxAge: 999999,
        httpOnly: true,
        secure: true,
        path: "/",
        sameSite: "lax",
      });
      
      return Response.json(message, {
        status: 200,
      });
    } else {
      const message = "کاربری با این ایمیل وجود دارد";
      return Response.json(message, { status: 400 });
    }
  }
}
