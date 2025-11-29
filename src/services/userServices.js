import { http } from "./httpConfig";

export async function getAllUser() {
  return await http.get("/getAllUser").then(({ data }) => data);
}

export async function getUser(id) {
  return await http
    .post("/getUser", { id })
    .then(({ data }) => data)
    .catch((err) => err);
}
