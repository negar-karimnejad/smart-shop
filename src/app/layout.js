import { Poppins } from "next/font/google";
import HotToastContext from "../../context/HotToastContext";
import AuthProvider from "../../providers/AuthProvider";
import CartProvider from "../../providers/cartProvider";
import Footer from "../components/share/Footer";
import Navbar from "../components/share/navbar/Navbar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "E-Shop",
  description: "Ecommerce App",
};

export default async function RootLayout({ children }) {

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
