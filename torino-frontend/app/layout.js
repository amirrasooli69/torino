import Header from "@modules/Header";
import "./globals.css";

export const metadata = {
  title: "Torino App",
  description: "this app fro booking travling in the world",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <Header />
        {children}
      </body>
    </html>
  );
}
