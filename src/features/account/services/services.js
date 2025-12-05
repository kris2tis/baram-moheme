import { http } from "@/services/httpConfig";

export async function updateProfileApi(id) {
  return await http
    .post("/updateProfile", id)
    .then(({ data }) => data)
    .catch((err) => err);
}
