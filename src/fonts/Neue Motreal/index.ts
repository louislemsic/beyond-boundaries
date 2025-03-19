import localFont from "next/font/local";

export const neueMontreal = {
  bold: localFont({
    src: "./NeueMotreal-Bold.otf",
    display: "swap",
    variable: "--font-neue-montreal-bold",
  }),
  light: localFont({
    src: "./NeueMotreal-Light.otf",
    display: "swap",
    variable: "--font-neue-montreal-light",
  }),
}

export default neueMontreal;