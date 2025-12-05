import { headers } from "next/headers";
import { http } from "./httpConfig";
export async function getAllUser() {
  return await http
    .get("/getAllUser", { headers: await headers() })
    .then(({ data }) => data);
}

export async function getUser(ids) {
  return await http
    .post("/getUser", ids)
    .then(({ data }) => data)
    .catch((err) => err);
}
