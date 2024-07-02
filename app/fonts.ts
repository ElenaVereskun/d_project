import localFont from "next/font/local";

export const manrope = localFont({
  src: [
    {
      path: "./fonts/Manrope.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
});
