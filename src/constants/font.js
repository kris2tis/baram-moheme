import localFont from "next/font/local";

export const modam = localFont({
  src: [
    {
      path: "../../public/Modam-Bold.ttf",
      weight: "600",
    },
    {
      path: "../../public/Modam-medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/Modam-regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/Modam-light.ttf",
      weight: "300",
    },
  ],
  variable: "--modam-font",
  style: "normal",
});
