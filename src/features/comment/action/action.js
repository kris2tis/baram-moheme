"use server";

import { likeCommentApi } from "@/services/commentServices";


export async function like(data) {
  try {
    const message = await likeCommentApi(data);
    return { succesMessage: message };
  } catch (error) {
    const errorMessage = error?.response?.data;
    return { errorMessage: errorMessage };
  }
}
