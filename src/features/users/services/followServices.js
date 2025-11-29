import { http } from "@/services/httpConfig";

export async function followApi(data) {
  return await http.post("/follow", data).then(({ data }) => data);
}
