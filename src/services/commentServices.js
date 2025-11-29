import { http } from "@/services/httpConfig";

export async function getAllMessage() {
  return await http.get("/getMessages").then(({ data }) => data);
}

export async function getMessage(id) {
  return await http.post("/getMessageById", { id }).then(({ data }) => data);
}

export async function addCommentApi(data) {
  return await http.post("/addComment", data).then(({ data }) => data);
}

export async function likeCommentApi(data) {
  return await http.post("/likeComment", data).then(({ data }) => data);
}