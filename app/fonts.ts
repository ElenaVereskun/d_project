import localFont from "next/font/local";

export const manrope = localFont({
  src: [
    {
      path: "./fonts/Manrope-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
});
