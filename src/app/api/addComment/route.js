import * as z from "zod";
import prisma from "../../../../lib/prisma";

const createMessageSchema = z.object({
  content: z
    .string("نوشتن نظر الزامی است")
    .min(5, "نظرت حداقل باید  5 کاراکتر داشته باشه 😄"),
  authorId: z.string("آیدی فرستنده ضروری است"),
  reciverId: z.string("آیدی گیرنده ضروری است"),
});

export async function POST(request) {
  const data = await request.json();

  const validationResult = createMessageSchema.safeParse(data);

  if (!validationResult.success) {
    const { fieldErrors } = z.flattenError(validationResult.error);
    let errors = [];

    for (const key in fieldErrors) {
      errors.push(fieldErrors[key]);
    }

    return Response.json(errors, {
      status: 400,
    });
  } else {
    await prisma.comment.create({
      data: data,
    });

    return Response.json({ message: "نظر با موفقیت ساخته شد", status: 200 });
  }
}
