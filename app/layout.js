import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ViewProvider } from "./context/ViewContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "The Campaign Chronicle",
  description: "Your campaign journal and world reference for players",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100 bg-parchment text-dark">
        <ViewProvider>
          <Header />
          <main className="flex-grow-1 container py-4">{children}</main>
          <Footer />
        </ViewProvider>
      </body>
    </html>
  );
}
