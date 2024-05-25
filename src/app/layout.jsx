import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import "./css/index.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carpo",
  description: "Your reliable logistics partner!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container">
          <Navbar />
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
