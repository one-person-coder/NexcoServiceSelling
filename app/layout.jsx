import "./globals.css";
import TopScroll from "@/components/common/TopScroll";
import BgParticles from "@/components/common/BgParticles";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Nexco",
  description: "Nexco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <TopScroll />
        <BgParticles />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
