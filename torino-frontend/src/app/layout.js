import Header from "@/components/modules/Header";
import "./globals.css";
import { yekan } from "@/utils/fonts";
import Footer from "@/components/modules/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
