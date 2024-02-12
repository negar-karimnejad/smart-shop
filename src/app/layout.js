import { Poppins } from "next/font/google";
import Footer from "../components/share/Footer";
import Navbar from "../components/share/navbar/Navbar";
import HotToastContext from "../../context/HotToastContext";
import CartProvider from "../../providers/cartProvider";
import "./globals.css";
import AuthProvider from "../../providers/AuthProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "E-Shop",
  description: "Ecommerce App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-700`}>
        <AuthProvider>
          <HotToastContext />
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
