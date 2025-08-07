import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ADmyBRAND Dashboard",
  description: "Analytics dashboard for digital marketing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
