import { http } from "@/services/httpConfig";

export async function signInApi(data) {
  return await http.post("/signin", data).then(({ data }) => data);
}
