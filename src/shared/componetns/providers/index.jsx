import React from "react";
import ToasProvider from "./toast-provider";

export default function Providers({ children }) {
  return (
    <>
      {children}
      <ToasProvider />
    </>
  );
}
