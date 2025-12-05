import React from "react";
import { Toaster } from "sonner";

export default function ToasProvider() {
  return (
    <Toaster
      style={{ fontFamily: "inherit", fontSize: "12px" }}
      toastOptions={{
        classNames: { success: "succes-toast", error: "error-toast" },
      }}
      theme="dark"
      dir="rtl"
      duration={1000000}
      gap={2}
      position="top-center"
    />
  );
}
