import "./globals.css";

export const metadata = {
  title: "Nexco",
  description: "Nexco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
