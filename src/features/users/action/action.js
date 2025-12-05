"use server";

import { followApi } from "@/features/comment/services/followServices";

export async function follow(data) {
  try {
    const message = await followApi(data);
    return { succesMessage: message };
  } catch (error) {
    const errorMessage = error?.response?.data;
    return { errorMessage: errorMessage };
  }
}
