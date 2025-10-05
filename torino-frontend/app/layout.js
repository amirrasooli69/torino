import Header from "@/modules/Header";
import "./globals.css";
import { yekan } from "@/utils/fonts";

export const metadata = {
  title: "Torino App",
  description: "this app fro booking travling in the world",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={yekan.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
