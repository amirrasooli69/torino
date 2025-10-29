import Header from "@/components/modules/Header";
import "./globals.css";
import { yekan } from "@/utils/fonts";
import Footer from "@/components/modules/Footer";
import TanstackQueryProvider from "@/components/partials/provider/TanstackQueryProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Torino App",
  description: "this app fro booking travling in the world",
};

export default function RootLayout({ children }) {
  return (
<html lang="fa">
      <body className={yekan.className}>
        <TanstackQueryProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
