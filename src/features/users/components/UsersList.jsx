import { getAllUser } from "@/services/userServices";
import React from "react";

export default async function UsersList() {
  const users = await getAllUser();
  return <div>

  </div>;
}
